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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
