import express, { response } from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { getIronSession } from "iron-session";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const COOKIE_NAME = process.env.COOKIE_NAME || "myapp_cookiename";
const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD || "complex_password_at_least_32_characters_long";

const db = new PrismaClient();

app.use(bodyParser.urlencoded());
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

// Borbélyok listája (csak a `Nev` mező) — a foglalás űrlap lekéri
app.get("/api/barbers", async (req, res) => {
  try {
    const rows = await db.borbelyok.findMany({ select: { Nev: true }, orderBy: { Nev: "asc" } });
    const names = rows.map((r) => r.Nev);
    return res.json({ ok: true, barbers: names });
  } catch (err) {
    console.error("Error fetching barbers:", err);
    return res.status(500).json({ error: "Nem sikerült lekérni a borbélyokat." });
  }
});

// Borbélyok listája (csak a név mező) — a foglalás űrlap lekéri
app.get("/api/barbers", async (req, res) => {
  try {
    const rows = await db.borbelyok.findMany({ select: { Nev: true }, orderBy: { Nev: "asc" } });
    const names = rows.map((r) => r.Nev);
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

// Rendelés mentése
app.post("/api/order", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a rendeléshez." });
  }

  const { products, shippingType, totalPrice } = req.body || {};
  if (!products || !shippingType) {
    return res.status(400).json({ error: "Hiányzó adatok." });
  }

  try {
    await db.rendeles.create({
      data: {
        felhaszid: session.user.id,
        products: products,
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
  session.user = { id: user.id, felhnev: user.felhnev, email: user.email, pnumber: user.telefonszam };
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
  const { username, email, password, pnumber } = req.body;
  console.log(password);
  const hashedPassword = await bcrypt.hash(password, 12);

  await db.felhasznalok.create({
    data: {
      felhnev: username,
      email: email,
      hash: hashedPassword,
      telefonszam: pnumber,
    },
  });

  res.redirect("/bejelentkezes");
});

// Foglalás mentése — csak bejelentkezett felhasználó menthet
app.post("/api/booking", urlencodedParser, async (req, res) => {
  const session = req.session;
  if (!session || !session.user) {
    return res.status(401).json({ error: "Kérjük, jelentkezz be a foglaláshoz." });
  }

  const { date, time, service } = req.body || {};
  if (!date || !time) {
    return res.status(400).json({ error: "Hiányzó dátum vagy idő." });
  }

  // service lehet opcionális de ha üres, jelöljük meg
  const chosenService = service && String(service).trim() ? String(service).trim() : null;

  // Parse date + time and construct a Date in UTC to avoid timezone shifts
  // (Date.UTC creates a timestamp corresponding to the selected local clock values)
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

  // Ellenőrzés: ne legyen már foglalás ugyanarra az időpontra
  try {
    const existing = await db.idopont.findFirst({ where: { idopont: dt } });
    if (existing) {
      return res.status(409).json({ error: "Ezen az időponton már van foglalás. Válassz másik időpontot." });
    }
  } catch (err) {
    console.error("Error checking existing booking:", err);
    return res.status(500).json({ error: "Ellenőrzési hiba történt." });
  }

  try {
    await db.idopont.create({
      data: {
        felhaszid: session.user.id,
        idopont: dt,
        szolgal: chosenService,
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
      where: { id: parseInt(bookingId) }
    });

    if (!booking) {
      return res.status(404).json({ error: "Foglalás nem található." });
    }

    if (booking.felhaszid !== session.user.id) {
      return res.status(403).json({ error: "Nincs jogosultságod törölni ezt a foglalást." });
    }

    await db.idopont.delete({
      where: { id: parseInt(bookingId) }
    });

    return res.json({ ok: true, message: "Foglalás sikeresen törölve." });
  } catch (err) {
    console.error("Booking delete error:", err);
    return res.status(500).json({ error: "Nem sikerült törölni a foglalást." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
