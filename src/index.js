import express, { response } from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { getIronSession } from "iron-session";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const COOKIE_NAME = process.env.COOKIE_NAME || "myapp_cookiename";
const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD || "complex_password_at_least_32_characters_long";

const db = new PrismaClient();

app.use(bodyParser.urlencoded());
app.use(express.json());
const urlencodedParser = bodyParser.urlencoded();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.use(async (req, res, next) => {
  req.session = await getIronSession(req, res, {
    cookieName: COOKIE_NAME,
    password: COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
  next();
});

app.get("/", async (req, res) => {
  res.render("index", { user: req.session.user });
});

app.get("/bejelentkezes", async (req, res) => {
  if (req.session.user) return res.redirect("/");
  res.render("bejelentkezes");
});

app.get("/regisztracio", async (req, res) => {
  if (req.session.user) return res.redirect("/");
  res.render("regisztracio");
});

app.get("/fiok", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/bejelentkezes");
  }

  // ha adnmin, akkor az admin felületre vigyen
  if (req.session.user.role === "ADMIN") {
    return res.render("admin", { user: req.session.user });
  }

  res.render("fiok", {
    user: req.session.user,
  });
});

// Foglalás oldal
app.get("/foglalas", (req, res) => {
  res.render("foglalas", { user: req.session.user });
});

// Webshop oldal
app.get("/shop", (req, res) => {
  res.render("shop", { user: req.session.user });
});

// Fizetés oldal
app.get("/fizetes", (req, res) => {
  res.render("fizetes", { user: req.session.user });
});

// Lekérdezi a bejelentkezett felhasználó foglalásait
app.get("/api/bookings", async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a lekérdezéshez." });
  }

  try {
    const rows = await db.idopont.findMany({
      where: { felhaszid: session.user.id },
      orderBy: { idopont: "asc" },
    });

    const bookings = rows.map((r) => ({ id: r.id, datetime: r.idopont, service: r.szolgal }));
    return res.json({ ok: true, bookings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a foglalásokat." });
  }
});

// Borbélyok listája - BARBER role-al rendelkező felhasználók — a foglalás űrlap lekéri
app.get("/api/barbers", async (req, res) => {
  try {
    const rows = await db.felhasznalok.findMany({
      where: { role: "BARBER" },
      select: { felhnev: true },
      orderBy: { felhnev: "asc" },
    });
    const names = rows.map((r) => r.felhnev);
    return res.json({ ok: true, barbers: names });
  } catch (err) {
    console.error("Error fetching barbers:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a borbélyokat." });
  }
});

// Rendelések lekérése
app.get("/api/orders", async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a lekérdezéshez." });
  }

  try {
    const rows = await db.rendeles.findMany({
      where: { felhaszid: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return res.json({ ok: true, orders: rows });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a rendeléseket." });
  }
});

// Admin-only: list all bookings with user info
app.get("/api/admin/bookings", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });

  try {
    const rows = await db.idopont.findMany({ orderBy: { idopont: "asc" } });
    const userIds = Array.from(new Set(rows.map((r) => r.felhaszid)));
    const users = await db.felhasznalok.findMany({ where: { id: { in: userIds } } });
    const userMap = Object.fromEntries(
      users.map((u) => [u.id, { id: u.id, felhnev: u.felhnev, email: u.email, telefonszam: u.telefonszam }]),
    );
    const bookings = rows.map((r) => ({
      id: r.id,
      datetime: r.idopont,
      service: r.szolgal,
      user: userMap[r.felhaszid] || null,
    }));
    return res.json({ ok: true, bookings });
  } catch (err) {
    console.error("Admin bookings error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: list all orders with user info
app.get("/api/admin/orders", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
  try {
    const rows = await db.rendeles.findMany({ orderBy: { createdAt: "desc" } });
    const userIds = Array.from(new Set(rows.map((r) => r.felhaszid)));
    const users = await db.felhasznalok.findMany({ where: { id: { in: userIds } } });
    const userMap = Object.fromEntries(
      users.map((u) => [u.id, { id: u.id, felhnev: u.felhnev, email: u.email, telefonszam: u.telefonszam }]),
    );
    const orders = rows.map((r) => ({ ...r, user: userMap[r.felhaszid] || null }));
    return res.json({ ok: true, orders });
  } catch (err) {
    console.error("Admin orders error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: delete a single order
app.delete("/api/admin/order/:id", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Érvénytelen rendelés ID." });
  }

  try {
    await db.rendeles.delete({ where: { id } });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Admin delete order error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: delete all orders
app.delete("/api/admin/orders", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    const result = await db.rendeles.deleteMany({});
    return res.json({ ok: true, deleted: result.count });
  } catch (err) {
    console.error("Admin delete all orders error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: delete a single booking
app.delete("/api/admin/booking/:id", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Érvénytelen foglalás ID." });
  }

  try {
    await db.idopont.delete({ where: { id } });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Admin delete booking error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: delete all bookings
app.delete("/api/admin/bookings", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    const result = await db.idopont.deleteMany({});
    return res.json({ ok: true, deleted: result.count });
  } catch (err) {
    console.error("Admin delete all bookings error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: list all users
app.get("/api/admin/users", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
  try {
    const users = await db.felhasznalok.findMany({ orderBy: { id: "asc" } });
    const sanitized = users.map((u) => ({
      id: u.id,
      felhnev: u.felhnev,
      email: u.email,
      telefonszam: u.telefonszam,
      role: u.role,
      emailVerified: u.emailVerified,
    }));
    return res.json({ ok: true, users: sanitized });
  } catch (err) {
    console.error("Admin users error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: update user basic fields
app.post("/api/admin/user/:id/update", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
  const id = parseInt(req.params.id);
  const { felhnev, email, telefonszam, role, emailVerified } = req.body || {};
  try {
    const data = {};
    if (felhnev !== undefined) data.felhnev = String(felhnev);
    if (email !== undefined) data.email = String(email);
    if (telefonszam !== undefined) data.telefonszam = String(telefonszam);
    if (role !== undefined) data.role = role;
    if (emailVerified !== undefined) data.emailVerified = emailVerified === "true" || emailVerified === true;
    const user = await db.felhasznalok.update({ where: { id }, data });
    return res.json({ ok: true, user: { id: user.id, felhnev: user.felhnev, email: user.email } });
  } catch (err) {
    console.error("Admin update user error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: change password
app.post("/api/admin/user/:id/password", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
  const id = parseInt(req.params.id);
  const { password } = req.body || {};
  if (!password) return res.status(400).json({ error: "Missing password" });
  try {
    const hash = await bcrypt.hash(String(password), 12);
    await db.felhasznalok.update({ where: { id }, data: { hash } });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Admin change password error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Admin-only: delete user
app.delete("/api/admin/user/:id", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
  const id = parseInt(req.params.id);
  try {
    await db.felhasznalok.delete({ where: { id } });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Admin delete user error:", err);
    return res.status(500).json({ error: "Hiba történt." });
  }
});

// Rendelés mentése
app.post("/api/order", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a rendeléshez." });
  }

  const { products, shippingType, totalPrice, address } = req.body || {};
  if (!products || !shippingType) {
    return res.status(400).json({ error: "Hiányzó adatok." });
  }

  try {
    await db.rendeles.create({
      data: {
        felhaszid: session.user.id,
        products: products,
        address: address ? String(address) : null,
        shippingType: shippingType,
        totalPrice: parseInt(totalPrice) || 0,
      },
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Order save error:", err);
    return res.status(500).json({ error: "Nem sikerült menteni a rendelést." });
  }
});

app.get("/api/hashTest", async (req, res) => {
  const hash = "$2a$12$09Hzf8/4jh/ODF6i84pXTe5uERYADJkAdtOT9DJiZa/6IcXOhOYGO"; // hash for "hello"

  const isMatch = await bcrypt.compare("hello1", hash);
  res.send(`Password match: ${isMatch}`);
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Hiányzó mezők" });
  }

  const user = await db.felhasznalok.findFirst({
    where: { felhnev: username },
  });

  if (!user) {
    // Ne áruld el, hogy nem létezik a felhasználó
    return res.status(401).json({ error: "Hibás felhasználónév vagy jelszó!" });
  }

  const passwordMatches = await bcrypt.compare(password, user.hash);
  if (!passwordMatches) {
    return res.status(401).json({ error: "Hibás felhasználónév vagy jelszó!" });
  }

  // Sikeres belépés: mentsük a session-t (ne tegyünk bele érzékeny adatokat)
  const session = req.session;
  session.user = { id: user.id, felhnev: user.felhnev, email: user.email, pnumber: user.telefonszam, role: user.role };
  await session.save();

  // Válasz JSON-nal, a kliens átirányít
  return res.json({ ok: true });
});

app.get("/api/logout", async (req, res) => {
  const session = req.session;
  session.destroy();
  res.redirect("/");
});

app.post("/api/register", urlencodedParser, async (req, res) => {
  const { username, email, password, pnumber, pnumber_prefix } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("Hiányzó mezők");
  }
  const fullPhone = pnumber ? `${pnumber_prefix || "+36"}${pnumber}` : null;

  const hashedPassword = await bcrypt.hash(password, 12);

  // generate email verification token
  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 24 * 3600 * 1000); // 24h

  const user = await db.felhasznalok.create({
    data: {
      felhnev: username,
      email: email,
      hash: hashedPassword,
      telefonszam: fullPhone,
      role: "USER",
      emailVerified: false,
      verifyToken: token,
      verifyTokenExpiry: expiry,
    },
  });

  // send verification email (fire-and-forget)
  try {
    await sendVerificationEmail(user.email, user.felhnev, token);
  } catch (err) {
    console.error("Failed to send verification email:", err);
  }

  // Redirect to login page with a message to check email
  res.redirect("/bejelentkezes");
});

// Email sender helper (uses SMTP configured via env)
async function sendVerificationEmail(email, username, token) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.FROM_EMAIL || `no-reply@${process.env.SMTP_HOST || "example.com"}`;

  if (!host || !user || !pass) {
    throw new Error("SMTP not configured (SMTP_HOST/SMTP_USER/SMTP_PASS required)");
  }

  const transporter = nodemailer.createTransport({ host, port, auth: { user, pass }, secure: port === 465 });

  const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
  const verifyUrl = `${baseUrl}/verify?token=${encodeURIComponent(token)}`;

  const info = await transporter.sendMail({
    from,
    to: email,
    subject: "Beach Barbershop - Email megerősítése",
    html: `<p>Szia ${username},</p>
      <p>Kérlek erősítsd meg az e-mail címed a következő linkre kattintva:</p>
      <p><a href="${verifyUrl}">E-mail megerősítése</a></p>
      <p>A link 24 óráig érvényes.</p>`,
  });

  console.log("Verification email sent:", info.messageId);
}

// Verify endpoint
app.get("/verify", async (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(400).send("Hiányzó token.");

  try {
    const user = await db.felhasznalok.findFirst({ where: { verifyToken: String(token) } });
    if (!user) return res.status(400).send("Érvénytelen vagy lejárt token.");

    if (!user.verifyTokenExpiry || user.verifyTokenExpiry < new Date()) {
      return res.status(400).send("A token lejárt. Kérlek regisztrálj újra.");
    }

    await db.felhasznalok.update({
      where: { id: user.id },
      data: { emailVerified: true, verifyToken: null, verifyTokenExpiry: null },
    });

    // redirect to login with a success message (could show a page instead)
    return res.redirect("/bejelentkezes");
  } catch (err) {
    console.error("Verification error:", err);
    return res.status(500).send("Hiba történt a megerősítéskor.");
  }
});

// Elérhető időpontok lekérése egy adott napra
app.get("/api/available-times/:date", async (req, res) => {
  try {
    const { date } = req.params;

    // Validáció: YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({ error: "Érvénytelen dátum formátum." });
    }

    // Nap típusának meghatározása
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay(); // 0 = vasárnap, 6 = szombat

    // Vasárnap zárva
    if (dayOfWeek === 0) {
      return res.json({ ok: true, available: [], booked: [], closed: true });
    }

    // Időpontok generálása a nap típusa alapján
    // Szombat: 9:00-15:00, Hétköznap: 9:00-20:00
    const timeSlots = [];
    const endHour = dayOfWeek === 6 ? 15 : 20;
    for (let h = 9; h < endHour; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour = String(h).padStart(2, "0");
        const minute = String(m).padStart(2, "0");
        timeSlots.push(`${hour}:${minute}`);
      }
    }

    // Lekérdezzük a foglalt időpontokat az adott napra
    const startOfDay = new Date(`${date}T00:00:00Z`);
    const endOfDay = new Date(`${date}T23:59:59Z`);

    // Borbély szűrés (query param)
    const barber = req.query.barber;

    const bookedSlots = await db.idopont.findMany({
      where: {
        idopont: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: { idopont: true, szolgal: true },
    });

    // Az idopontokat szöveggé konvertáljuk (HH:mm) - csak az adott borbélynál
    const bookedTimes = bookedSlots
      .filter((b) => {
        // Blokkolt időpontok kezelése (BARBER_BLOCKED|barber_name formátum)
        if (b.szolgal && b.szolgal.startsWith("BARBER_BLOCKED|")) {
          if (!barber) return true; // Ha nincs borbély megadva, minden blokk számít
          const blockedBarber = b.szolgal.split("|")[1];
          return blockedBarber === barber;
        }
        // Normál foglalások: csak az adott borbélynál szűrünk
        if (!barber) return true; // Ha nincs borbély megadva, minden foglalás számít
        const bookedBarber = b.szolgal ? b.szolgal.split("|")[0] : null;
        return bookedBarber === barber;
      })
      .map((b) => {
        const dt = new Date(b.idopont);
        const hour = String(dt.getUTCHours()).padStart(2, "0");
        const minute = String(dt.getUTCMinutes()).padStart(2, "0");
        return `${hour}:${minute}`;
      });

    // Szabad időpontok
    const availableTimes = timeSlots.filter((t) => !bookedTimes.includes(t));

    return res.json({ ok: true, available: availableTimes, booked: bookedTimes });
  } catch (err) {
    console.error("Error fetching available times:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni az elérhető időpontokat." });
  }
});

// Teli napok lekérése egy hónapra (ahol már nincs szabad időpont)
app.get("/api/full-days/:year/:month", async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const month = parseInt(req.params.month); // 1-12

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
      return res.status(400).json({ error: "Érvénytelen év vagy hónap." });
    }

    // Hónap első és utolsó napja
    const startOfMonth = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
    const endOfMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59));
    const daysInMonth = new Date(year, month, 0).getDate();

    // Slot számok napok szerint:
    // Vasárnap: 0 (zárva), Szombat: 11 (9:00-14:00, 14:30 után zárva), Hétköznap: 22 (9:00-20:00)
    function getSlotsForDay(dayOfWeek) {
      if (dayOfWeek === 0) return 0; // Vasárnap
      if (dayOfWeek === 6) return 11; // Szombat
      return 22; // Hétköznap
    }

    // Borbély szűrés (query param)
    const barber = req.query.barber;

    // Lekérdezzük az összes foglalást ebben a hónapban
    const bookings = await db.idopont.findMany({
      where: {
        idopont: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
      select: { idopont: true, szolgal: true },
    });

    // Számoljuk meg a foglalásokat napokra bontva - csak az adott borbélynál
    const bookingsPerDay = {};
    bookings.forEach((b) => {
      // Blokkolt időpontok kezelése (BARBER_BLOCKED|barber_name formátum)
      if (b.szolgal && b.szolgal.startsWith("BARBER_BLOCKED|")) {
        if (barber) {
          const blockedBarber = b.szolgal.split("|")[1];
          if (blockedBarber !== barber) return; // Más borbély blokkja, kihagyjuk
        }
      } else {
        // Normál foglalások szűrése
        if (barber) {
          const bookedBarber = b.szolgal ? b.szolgal.split("|")[0] : null;
          if (bookedBarber !== barber) return; // Más borbély foglalása, kihagyjuk
        }
      }
      const dt = new Date(b.idopont);
      const day = dt.getUTCDate();
      bookingsPerDay[day] = (bookingsPerDay[day] || 0) + 1;
    });

    // Meghatározzuk a teli napokat és a vasárnapokat
    const fullDays = [];
    const sundays = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      const totalSlots = getSlotsForDay(dayOfWeek);

      if (dayOfWeek === 0) {
        sundays.push(d); // Vasárnap - zárva
      } else if ((bookingsPerDay[d] || 0) >= totalSlots) {
        fullDays.push(d);
      }
    }

    return res.json({ ok: true, fullDays, sundays });
  } catch (err) {
    console.error("Error fetching full days:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a teli napokat." });
  }
});

// Foglalás mentése — csak bejelentkezett felhasználó menthet
app.post("/api/booking", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a foglaláshoz." });
  }

  const { date, time, service, barber } = req.body || {};
  if (!date || !time) {
    return res.status(400).json({ error: "Hiányzó dátum vagy idő." });
  }

  // service és barber lehet opcionális
  const chosenService = service && String(service).trim() ? String(service).trim() : null;
  const chosenBarber = barber && String(barber).trim() ? String(barber).trim() : null;

  // Parse date + time and construct a Date in UTC to avoid timezone shifts
  const [y, m, d] = String(date)
    .split("-")
    .map((v) => Number(v));
  const [hh, mm] = String(time)
    .split(":")
    .map((v) => Number(v));
  const dt = new Date(Date.UTC(y, m - 1, d, hh, mm, 0));
  if (isNaN(dt.getTime())) {
    return res.status(400).json({ error: "Érvénytelen dátum/idő." });
  }

  // Ellenőrzés: ne legyen már foglalás ugyanarra az időpontra az adott borbélynál
  try {
    const existingBookings = await db.idopont.findMany({
      where: { idopont: dt },
      select: { szolgal: true },
    });

    // Ellenőrizzük, hogy az adott borbélynál van-e már foglalás vagy blokkolt időpont
    const hasConflict = existingBookings.some((b) => {
      // Blokkolt időpont? Nem lehet foglalni
      if (b.szolgal && b.szolgal.startsWith("BARBER_BLOCKED|")) {
        const blockedBarber = b.szolgal.split("|")[1];
        return blockedBarber === chosenBarber;
      }
      // Normál foglalás
      const bookedBarber = b.szolgal ? b.szolgal.split("|")[0] : null;
      return bookedBarber === chosenBarber;
    });

    if (hasConflict) {
      return res
        .status(409)
        .json({ error: "Ezen az időponton már van foglalás ennél a borbélynál. Válassz másik időpontot." });
    }
  } catch (err) {
    console.error("Error checking existing booking:", err);
    return res.status(500).json({ error: "Ellenőrzési hiba történt." });
  }

  try {
    // Tárolunk: "barber|service" formátumban a szolgal mezőben
    const bookingData = chosenBarber ? `${chosenBarber}|${chosenService}` : chosenService;
    await db.idopont.create({
      data: {
        felhaszid: session.user.id,
        idopont: dt,
        szolgal: bookingData,
      },
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Booking save error:", err);
    return res.status(500).json({ error: "Nem sikerült menteni a foglalást." });
  }
});

// Foglalás törlése
app.delete("/api/booking/:id", async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a foglalás törléshez." });
  }

  const bookingId = req.params.id;
  if (!bookingId) {
    return res.status(400).json({ error: "Hiányzó foglalás ID." });
  }

  try {
    // Ellenőrzés: csak a saját foglalásait lehet törölni
    const booking = await db.idopont.findUnique({
      where: { id: parseInt(bookingId) },
    });

    if (!booking) {
      return res.status(404).json({ error: "Foglalás nem található." });
    }

    if (booking.felhaszid !== session.user.id) {
      return res.status(403).json({ error: "Nincs jogosultságod törölni ezt a foglalást." });
    }

    await db.idopont.delete({
      where: { id: parseInt(bookingId) },
    });

    return res.json({ ok: true, message: "Foglalás sikeresen törölve." });
  } catch (err) {
    console.error("Booking delete error:", err);
    return res.status(500).json({ error: "Nem sikerült törölni a foglalást." });
  }
});

// ===== BARBER ENDPOINTS =====

// Barber beérkezett foglalásai (ahol őt választották ki)
app.get("/api/barber/bookings", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  try {
    const barberName = session.user.felhnev;
    const rows = await db.idopont.findMany({
      where: {
        szolgal: {
          contains: barberName,
        },
      },
      orderBy: { idopont: "asc" },
    });

    // Kiszűrjük a blokkolt időpontokat (BARBER_BLOCKED|barber_name formátum)
    const normalBookings = rows.filter((r) => !r.szolgal.startsWith("BARBER_BLOCKED|"));

    // User adatok lekérése
    const userIds = Array.from(new Set(normalBookings.map((r) => r.felhaszid)));
    const users = await db.felhasznalok.findMany({
      where: { id: { in: userIds } },
    });
    const userMap = Object.fromEntries(users.map((u) => [u.id, u]));

    const bookings = normalBookings.map((r) => ({
      ...r,
      felhasznalo: userMap[r.felhaszid] || null,
    }));

    return res.json({ ok: true, bookings });
  } catch (err) {
    console.error("Error fetching barber bookings:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a foglalásokat." });
  }
});

// Barber foglalás törlése
app.delete("/api/barber/booking/:id", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  const bookingId = req.params.id;
  if (!bookingId) {
    return res.status(400).json({ error: "Hiányzó foglalás ID." });
  }

  try {
    const booking = await db.idopont.findUnique({
      where: { id: parseInt(bookingId) },
    });

    if (!booking) {
      return res.status(404).json({ error: "Foglalás nem található." });
    }

    // Ellenőrzés: csak a saját foglalásait lehet törölni (ahol a borbély neve szerepel)
    const barberName = session.user.felhnev;
    if (!booking.szolgal.includes(barberName)) {
      return res.status(403).json({ error: "Nincs jogosultságod törölni ezt a foglalást." });
    }

    await db.idopont.delete({
      where: { id: parseInt(bookingId) },
    });

    return res.json({ ok: true, message: "Foglalás sikeresen lemondva." });
  } catch (err) {
    console.error("Barber booking delete error:", err);
    return res.status(500).json({ error: "Nem sikerült törölni a foglalást." });
  }
});

// Barber által blokkolva napok
app.get("/api/barber/blocked-days/:year/:month", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  try {
    const { year, month } = req.params;
    const y = parseInt(year);
    const m = parseInt(month);
    const barberName = session.user.felhnev;
    const daysInMonth = new Date(y, m, 0).getDate();

    // Függvény: slot számok napok szerint
    function getSlotsForDay(dayOfWeek) {
      if (dayOfWeek === 0) return 0; // Vasárnap - zárva
      if (dayOfWeek === 6) return 11; // Szombat (9:00-14:00, 14:30 után zárva) = 11 slot
      return 22; // Hétköznap (9:00-20:00) = 22 slot
    }

    // Lekérjük az összes blokkolt időpontot az adott hónapban
    const blockedEntries = await db.idopont.findMany({
      where: {
        szolgal: { startsWith: `BARBER_BLOCKED|${barberName}` },
        idopont: {
          gte: new Date(y, m - 1, 1),
          lt: new Date(y, m, 1),
        },
      },
    });

    // Számlálás: hány blokkolt slot van napi bontásban
    const blockedCountPerDay = {};
    blockedEntries.forEach((b) => {
      const day = new Date(b.idopont).getDate();
      blockedCountPerDay[day] = (blockedCountPerDay[day] || 0) + 1;
    });

    // Meghatározzuk: teljesen blokkolt napok vs részlegesen blokkolt napok
    const fullyBlockedDays = [];
    const partialBlockedDays = [];

    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(y, m - 1, d);
      const dayOfWeek = dateObj.getDay();
      const totalSlots = getSlotsForDay(dayOfWeek);
      const blockedSlots = blockedCountPerDay[d] || 0;

      if (totalSlots > 0 && blockedSlots > 0) {
        if (blockedSlots >= totalSlots) {
          fullyBlockedDays.push(d);
        } else {
          partialBlockedDays.push(d);
        }
      }
    }

    return res.json({ ok: true, fullyBlockedDays, partialBlockedDays });
  } catch (err) {
    console.error("Error fetching blocked days:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni az adatokat." });
  }
});

// Barber időpontjai egy adott napra
app.get("/api/barber/times/:date", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  try {
    const { date } = req.params;
    // A dátum YYYY-MM-DD formátumban van
    const [year, month, day] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    const dayOfWeek = dateObj.getDay(); // 0 = vasárnap, 6 = szombat

    // Egy adott nap összes lehetséges időpontja
    // Szombat: 9:00-15:00, más napok: 9:00-20:00
    const times = [];
    const endHour = dayOfWeek === 6 ? 15 : 20;

    for (let h = 9; h < endHour; h++) {
      for (let m = 0; m < 60; m += 30) {
        times.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
      }
    }

    // Lekérjük az adott nap foglalásait a borbélynak (UTC-vel)
    const barberName = session.user.felhnev;
    const startOfDay = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    const endOfDay = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0));

    const bookings = await db.idopont.findMany({
      where: {
        szolgal: { contains: barberName },
        idopont: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
    });

    const bookedTimes = bookings.map((b) => {
      const h = b.idopont.getUTCHours();
      const m = b.idopont.getUTCMinutes();
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    });

    // blocked = true ha az időpont blokkolva van, false ha szabad
    const timesWithStatus = times.map((t) => ({
      time: t,
      blocked: bookedTimes.includes(t),
    }));

    return res.json({ ok: true, times: timesWithStatus });
  } catch (err) {
    console.error("Error fetching barber times:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni az adatokat." });
  }
});

// Barber időpontjának be/kijelölése (blokkolt időpont kezelése)
app.post("/api/barber/toggle-time", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  try {
    const { date, time } = req.body;
    if (!date || !time) {
      return res.status(400).json({ error: "Hiányzó paraméterek" });
    }

    const [year, month, day] = date.split("-").map(Number);
    const [hour, minute] = time.split(":").map(Number);
    const dateTime = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));

    const barberName = session.user.felhnev;

    // Ellenőrizzük hogy van-e már foglalás erre az időpontra
    const existing = await db.idopont.findFirst({
      where: {
        idopont: dateTime,
        szolgal: { contains: barberName },
      },
    });

    if (existing) {
      // Törlés - ha már van, akkor töröljük
      await db.idopont.delete({
        where: { id: existing.id },
      });
      return res.json({ ok: true, message: "Időpont felszabadítva" });
    } else {
      // Létrehozás - blokkoljuk az időpontot
      await db.idopont.create({
        data: {
          felhaszid: session.user.id,
          idopont: dateTime,
          szolgal: `BARBER_BLOCKED|${barberName}`,
        },
      });
      return res.json({ ok: true, message: "Időpont blokkolva" });
    }
  } catch (err) {
    console.error("Error toggling barber time:", err);
    return res.status(500).json({ error: "Nem sikerült módosítani az időpontot." });
  }
});

// Egész nap blokkolása
app.post("/api/barber/block-day", async (req, res) => {
  const session = req.session;
  if (!session || !session.user || session.user.role !== "BARBER") {
    return res.status(403).json({ error: "Csak borbélyok érhetik el ezt az endpoint-ot" });
  }

  try {
    const { date } = req.body;
    if (!date) {
      return res.status(400).json({ error: "Hiányzó paraméter" });
    }

    const [year, month, day] = date.split("-").map(Number);
    const barberName = session.user.felhnev;
    const dayOfWeek = new Date(year, month - 1, day).getDay();

    // Szombat 9:00-15:00, egyéb napok 9:00-20:00 (meg kell egyezzen a getSlotsForDay-vel)
    const endHour = dayOfWeek === 6 ? 15 : 20;
    const times = [];

    for (let h = 9; h < endHour; h++) {
      for (let m = 0; m < 60; m += 30) {
        if (dayOfWeek === 6 && h === 14 && m >= 30) continue;
        times.push({ hour: h, minute: m });
      }
      if (dayOfWeek === 6 && h === 14) break;
    }

    // Ellenőrizze, hogy a nap már blokkolt-e (UTC idővel)
    const startOfDay = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    const endOfDay = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0));

    const blockedCount = await db.idopont.count({
      where: {
        szolgal: { contains: `BARBER_BLOCKED|${barberName}` },
        idopont: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
    });

    const totalSlots = times.length;
    const isFullyBlocked = blockedCount >= totalSlots;

    if (isFullyBlocked) {
      // Teljesen blokkolt nap - feloldása
      await db.idopont.deleteMany({
        where: {
          szolgal: { contains: `BARBER_BLOCKED|${barberName}` },
          idopont: {
            gte: startOfDay,
            lt: endOfDay,
          },
        },
      });
      return res.json({ ok: true, action: "unblocked", message: "Nap feloldva" });
    } else {
      // Részlegesen vagy egyáltalán nem blokkolt - blokkoljuk az összes szabad slotot
      for (const { hour, minute } of times) {
        const dateTime = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));

        const existing = await db.idopont.findFirst({
          where: {
            idopont: dateTime,
            szolgal: { contains: barberName },
          },
        });

        if (!existing) {
          await db.idopont.create({
            data: {
              felhaszid: session.user.id,
              idopont: dateTime,
              szolgal: `BARBER_BLOCKED|${barberName}`,
            },
          });
        }
      }
      return res.json({ ok: true, action: "blocked", message: "Nap blokkolva" });
    }
  } catch (err) {
    console.error("Error blocking day:", err);
    return res.status(500).json({ error: "Nem sikerült módosítani a nap státuszát." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
