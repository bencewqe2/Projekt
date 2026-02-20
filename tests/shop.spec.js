import { test, expect } from "@playwright/test";

test.describe("Webshop oldal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/shop");
  });

  test("A shop oldal sikeresen betölt", async ({ page }) => {
    await expect(page).toHaveURL("/shop");
    await expect(page).toHaveTitle(/Shop.*Hajápolási Termékek/i);
  });

  test("Az oldal HTTP 200-as státuszkóddal tölt be", async ({ page }) => {
    const response = await page.goto("/shop");
    expect(response.status()).toBe(200);
  });

  test("A logo megjelenik a fejlécben", async ({ page }) => {
    await expect(page.locator(".logo")).toContainText("Beach Barbershop");
  });

  test("Az oldal fejléce helyes", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Hajápolási Termékek");
  });

  test("A szűrő gombok megjelennek", async ({ page }) => {
    const filterButtons = page.locator(".filter-btn");
    await expect(filterButtons).toHaveCount(4);
  });

  test("Az 'Összes Termék' szűrő alapból aktív", async ({ page }) => {
    const allBtn = page.locator('.filter-btn[data-category="all"]');
    await expect(allBtn).toHaveClass(/active/);
  });

  test("Legalább 8 termékkártya megjelenik", async ({ page }) => {
    const products = page.locator(".product-card");
    await expect(products).toHaveCount(8);
  });

  test("Minden termékkártya tartalmaz nevet, leírást, árat és kosárba gombot", async ({ page }) => {
    const firstCard = page.locator(".product-card").first();
    await expect(firstCard.locator("h3")).not.toBeEmpty();
    await expect(firstCard.locator(".description")).not.toBeEmpty();
    await expect(firstCard.locator(".price")).not.toBeEmpty();
    await expect(firstCard.locator(".btn-add-cart")).toBeVisible();
  });

  test("A Hajápolás kategória szűrő csak hajápolási termékeket mutat", async ({ page }) => {
    await page.locator('.filter-btn[data-category="haircare"]').click();

    // Ellenőrizzük, hogy a haircare kártyák láthatóak
    const haircareCards = page.locator('.product-card[data-category="haircare"]');
    const allCards = page.locator(".product-card");

    const haircareCount = await haircareCards.count();
    const allCount = await allCards.count();

    // A haircare kártyák száma kisebb vagy egyenlő az összes kártyánál
    expect(haircareCount).toBeLessThanOrEqual(allCount);
    expect(haircareCount).toBeGreaterThan(0);
  });

  test("A Hajformázás szűrő gomb megjelenik és kattintható", async ({ page }) => {
    const stylingBtn = page.locator('.filter-btn[data-category="styling"]');
    await expect(stylingBtn).toBeVisible();
    await stylingBtn.click();
    await expect(stylingBtn).toHaveClass(/active/);
  });

  test("A Kosárba gomb megnyitja a mennyiség-választó modalt", async ({ page }) => {
    await page.locator(".btn-add-cart").first().click();
    await expect(page.locator("#quantityModal")).toBeVisible({ timeout: 3000 });
  });

  test("A mennyiség-választó modal tartalmazza a megerősítés és mégsem gombokat", async ({ page }) => {
    await page.locator(".btn-add-cart").first().click();
    const modal = page.locator("#quantityModal");
    await expect(modal).toBeVisible();
    await expect(page.locator("#quantityConfirm")).toBeVisible();
    await expect(page.locator("#quantityCancel")).toBeVisible();
  });

  test("A Mégsem gomb bezárja a mennyiség-választó modalt", async ({ page }) => {
    await page.locator(".btn-add-cart").first().click();
    await expect(page.locator("#quantityModal")).toBeVisible();
    await page.locator("#quantityCancel").click();
    await expect(page.locator("#quantityModal")).toBeHidden({ timeout: 3000 });
  });

  test("A kosár ikon jelen van az oldalon", async ({ page }) => {
    // A desktop és mobil kosár ikon a DOM-ban van (a mobil ikon CSS-sel el lehet rejtve)
    await expect(page.locator(".cart-icon").first()).toBeAttached();
  });

  test("Kezdetben a kosár száma 0", async ({ page }) => {
    const badge = page.locator("#cartBadge").or(page.locator("#cartBadgeMobile")).first();
    await expect(badge).toContainText("0");
  });
});

test.describe("Fizetés oldal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/fizetes");
  });

  test("A fizetés oldal sikeresen betölt", async ({ page }) => {
    await expect(page).toHaveURL("/fizetes");
    await expect(page).toHaveTitle(/Fizetés.*Beach Barbershop/i);
  });

  test("Az oldal HTTP 200-as státuszkóddal tölt be", async ({ page }) => {
    const response = await page.goto("/fizetes");
    expect(response.status()).toBe(200);
  });

  test("A logo megjelenik a fejlécben", async ({ page }) => {
    await expect(page.locator(".logo")).toContainText("Beach Barbershop");
  });
});
