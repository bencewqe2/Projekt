import { test, expect } from "@playwright/test";

test.describe("Főoldal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Az oldal sikeresen betölt és a cím helyes", async ({ page }) => {
    await expect(page).toHaveTitle(/Klasszikus Borbély|Beach Barbershop/i);
  });

  test("A logo megjelenik a fejlécben", async ({ page }) => {
    await expect(page.locator(".logo")).toContainText("Beach Barbershop");
  });

  test("A navigációs menü tartalmazza az elvárt linkeket", async ({ page }) => {
    const nav = page.locator("nav#mainNav");
    await expect(nav.getByRole("link", { name: /Foglalás/i })).toBeVisible();
    await expect(nav.getByRole("link", { name: /Webshop/i })).toBeVisible();
  });

  test("A Foglalás link a foglalás oldalra navigál", async ({ page }) => {
    await page
      .getByRole("link", { name: /Foglalás/i })
      .first()
      .click();
    await expect(page).toHaveURL("/foglalas");
  });

  test("A Webshop link a shop oldalra navigál", async ({ page }) => {
    await page
      .getByRole("link", { name: /Webshop/i })
      .first()
      .click();
    await expect(page).toHaveURL("/shop");
  });

  test("A Bejelentkezés link megjelenik, ha nincs bejelentkezve", async ({ page }) => {
    // A link az aria-hidden dropdown-ban van, href alapján ellenőrizzük
    await expect(page.locator('a[href="/bejelentkezes"]').first()).toBeAttached();
  });

  test("A Szolgáltatások szekció megjelenik", async ({ page }) => {
    const services = page.locator("#services");
    await expect(services).toBeVisible();
  });

  test("Az oldal HTTP 200-as státuszkóddal tölt be", async ({ page }) => {
    const response = await page.goto("/");
    expect(response.status()).toBe(200);
  });
});
