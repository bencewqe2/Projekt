import readline from "readline";
import bcrypt from "bcrypt";
import { PrismaClient } from "../src/generated/prisma/client.js";

const db = new PrismaClient();

function question(prompt) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(prompt, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

async function main() {
  try {
    console.log("\n== ADMIN LÉTREHOZÁSA (interaktív) ==\n");

    const email = (await question("Admin email: ")).trim();
    if (!email) {
      console.error("Az email megadása kötelező.");
      process.exit(1);
    }

    const usernameInput = (await question("Admin felhasználónév (alap: admin): ")).trim();
    const username = usernameInput || "admin";

    const pwd = await question("Jelszó (látható): ");
    const pwd2 = await question("Jelszó megerősítése: ");

    if (pwd !== pwd2) {
      console.error("A jelszavak nem egyeznek.");
      process.exit(1);
    }

    const confirm = (await question(`Létrehozod az ADMIN felhasználót ${username} <${email}> ? (igen/nem): `))
      .trim()
      .toLowerCase();
    if (confirm !== "i" && confirm !== "igen") {
      console.log("Művelet megszakítva.");
      process.exit(0);
    }

    // ellenőrizzük, hogy létezik-e már
    const existing = await db.felhasznalok.findFirst({ where: { email } });
    if (existing) {
      console.log("Már létezik felhasználó ezzel az email-címmel:", existing.email);
      if (existing.role !== "ADMIN") {
        const doUpdate = (await question("Frissítsük a meglévő felhasználót ADMIN szerepre? (igen/nem): "))
          .trim()
          .toLowerCase();
        if (doUpdate === "i" || doUpdate === "igen") {
          await db.felhasznalok.update({ where: { id: existing.id }, data: { role: "ADMIN", emailVerified: true } });
          console.log("A meglévő felhasználó szerepköre ADMIN-ra frissítve.");
        } else {
          console.log("Nem történt változtatás.");
        }
      } else {
        console.log("A felhasználó már ADMIN szerepkörű.");
      }
      process.exit(0);
    }

    const hash = await bcrypt.hash(pwd, 12);

    const user = await db.felhasznalok.create({
      data: {
        felhnev: username,
        email,
        hash,
        role: "ADMIN",
        emailVerified: true,
      },
    });

    console.log("\nADMIN felhasználó létrehozva:");
    console.log(" id:", user.id);
    console.log(" email:", user.email);
    console.log(" felhasználónév:", user.felhnev);
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
