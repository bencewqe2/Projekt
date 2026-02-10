import { PrismaClient } from "../src/generated/prisma/client.js";

const db = new PrismaClient();

async function main() {
  try {
    console.log("Borbélyok hozzáadása...");

    // Meglévő borbélyok törlése (opcionális)
    await db.borbelyok.deleteMany({});

    // Új borbélyok hozzáadása
    const barbers = [
      { Nev: "Haj Hedvig", email: "hedvig@barbershop.hu" },
      { Nev: "Átmenet Aladár", email: "aladar@barbershop.hu" },
    ];

    for (const barber of barbers) {
      const created = await db.borbelyok.create({ data: barber });
      console.log(`✓ Borbély hozzáadva: ${created.Nev}`);
    }

    console.log("Kész!");
  } catch (err) {
    console.error("Hiba:", err);
  } finally {
    await db.$disconnect();
  }
}

main();
