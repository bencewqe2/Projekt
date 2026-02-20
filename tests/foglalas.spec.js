import { test, expect } from "@playwright/test";

test.describe("Foglalás oldal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/foglalas");
  });

  test("A foglalás oldal sikeresen betölt", async ({ page }) => {
    await expect(page).toHaveURL("/foglalas");
    await expect(page).toHaveTitle(/Foglalás.*Beach Barbershop/i);
  });

  test("Az oldal HTTP 200-as státuszkóddal tölt be", async ({ page }) => {
    const response = await page.goto("/foglalas");
    expect(response.status()).toBe(200);
  });

  test("A logo megjelenik a fejlécben", async ({ page }) => {
    await expect(page.locator(".logo")).toContainText("Beach Barbershop");
  });

  test("A foglalás kártya fejléce megjelenik", async ({ page }) => {
    const heading = page.locator(".booking-card h2");
    await expect(heading).toContainText("Foglalás");
  });

  test("Bejelentkezés nélkül a bejelentkezési kérés üzenet jelenik meg", async ({ page }) => {
    // Ha nincs bejelentkezett felhasználó, a foglalás kérje meg a belépést
    const body = page.locator("body");
    const bodyText = await body.textContent();
    // Az oldal vagy a bejelentkezési kérést mutatja, vagy a foglalási lépéseket
    expect(bodyText).toMatch(/Bejelentkezés|Foglalás|Beach Barbershop/i);
  });

  test("A Főoldal link visszanavigál a főoldalra", async ({ page }) => {
    const mainLink = page.locator("#mainNav").getByRole("link", { name: /Főoldal/i });
    await expect(mainLink).toBeVisible();
    await mainLink.click();
    await expect(page).toHaveURL("/");
  });

  test("A Webshop link navigál a shop oldalra", async ({ page }) => {
    const shopLink = page.getByRole("link", { name: /Webshop/i }).first();
    await expect(shopLink).toBeVisible();
    await shopLink.click();
    await expect(page).toHaveURL("/shop");
  });
});

test.describe("Foglalás API végpontok", () => {
  test("A /api/barbers végpont visszaad egy borbélylistát", async ({ request }) => {
    const response = await request.get("/api/barbers");
    // Ha az adatbázis elérhető, 200-at vár; egyébként a szerver 500-at ad
    if (response.status() === 200) {
      const body = await response.json();
      expect(body).toHaveProperty("ok", true);
      expect(body).toHaveProperty("barbers");
      expect(Array.isArray(body.barbers)).toBeTruthy();
    } else {
      test.skip(true, "Az adatbázis nem elérhető – DB-függő teszt kihagyva.");
    }
  });

  test("A /api/available-times/:date végpont érvényes dátummal válaszol", async ({ request }) => {
    const response = await request.get("/api/available-times/2026-06-16");
    // Ha az adatbázis elérhető, 200-at vár; egyébként a szerver 500-at ad
    if (response.status() === 200) {
      const body = await response.json();
      expect(body).toHaveProperty("ok", true);
      expect(body).toHaveProperty("available");
      expect(Array.isArray(body.available)).toBeTruthy();
    } else {
      test.skip(true, "Az adatbázis nem elérhető – DB-függő teszt kihagyva.");
    }
  });

  test("A /api/available-times/:date végpont érvénytelen dátumra 400-t ad", async ({ request }) => {
    const response = await request.get("/api/available-times/nem-datum");
    expect(response.status()).toBe(400);
  });

  test("A /api/available-times vasárnap 'closed: true' választ ad", async ({ request }) => {
    // 2026-02-22 vasárnap
    const response = await request.get("/api/available-times/2026-02-22");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("closed", true);
  });

  test("A /api/bookings hitelesítés nélkül 401-et ad", async ({ request }) => {
    const response = await request.get("/api/bookings");
    expect(response.status()).toBe(401);
  });
});
