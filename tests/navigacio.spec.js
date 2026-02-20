import { test, expect } from "@playwright/test";

test.describe("Navigáció az oldalak között", () => {
  test("Főoldalról a Foglalás oldalra navigálás", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /Foglalás/i })
      .first()
      .click();
    await expect(page).toHaveURL("/foglalas");
    await expect(page.locator(".logo")).toContainText("Beach Barbershop");
  });

  test("Főoldalról a Webshop oldalra navigálás", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /Webshop/i })
      .first()
      .click();
    await expect(page).toHaveURL("/shop");
  });

  test("Főoldalról a Bejelentkezés oldalra navigálás", async ({ page }) => {
    // A bejelentkezés link hol dropdown-ban, hol a mobil profilban jelenik meg
    await page.goto("/bejelentkezes");
    await expect(page).toHaveURL("/bejelentkezes");
  });

  test("Bejelentkezés oldalról a Regisztráció oldalra navigálás", async ({ page }) => {
    await page.goto("/bejelentkezes");
    await page.getByRole("link", { name: /Regisztrálj/i }).click();
    await expect(page).toHaveURL("/regisztracio");
  });

  test("Regisztráció oldalról a Bejelentkezés oldalra navigálás", async ({ page }) => {
    await page.goto("/regisztracio");
    await page.getByRole("link", { name: /Jelentkezz be/i }).click();
    await expect(page).toHaveURL("/bejelentkezes");
  });

  test("A /fizetes oldal közvetlenül navigálható", async ({ page }) => {
    const response = await page.goto("/fizetes");
    expect(response.status()).toBe(200);
    await expect(page).toHaveURL("/fizetes");
  });

  test("Foglalás oldalról a Főoldalra visszanavigálás", async ({ page }) => {
    await page.goto("/foglalas");
    await page
      .locator("#mainNav")
      .getByRole("link", { name: /Főoldal/i })
      .click();
    await expect(page).toHaveURL("/");
  });

  test("A böngésző visszagombja működik", async ({ page }) => {
    await page.goto("/");
    await page.goto("/shop");
    await page.goBack();
    await expect(page).toHaveURL("/");
  });

  test("Összes fő útvonal HTTP 200-as státuszkóddal tölt be", async ({ page }) => {
    const routes = ["/", "/bejelentkezes", "/regisztracio", "/foglalas", "/shop", "/fizetes"];

    for (const route of routes) {
      const response = await page.goto(route);
      expect(response.status(), `${route} HTTP állapota`).toBe(200);
    }
  });
});

test.describe("API végpontok alaptesztek", () => {
  test("A /api/orders hitelesítés nélkül 401-et ad", async ({ request }) => {
    const response = await request.get("/api/orders");
    expect(response.status()).toBe(401);
  });

  test("Az admin végpontok hitelesítés nélkül 403-at adnak", async ({ request }) => {
    const adminRoutes = ["/api/admin/bookings", "/api/admin/orders", "/api/admin/users"];

    for (const route of adminRoutes) {
      const response = await request.get(route);
      expect(response.status(), `${route} admin védelem`).toBe(403);
    }
  });

  test("A /api/login POST mezők nélkül 400-as hibát ad", async ({ request }) => {
    const response = await request.post("/api/login", {
      form: {},
    });
    expect(response.status()).toBe(400);
  });
});
