import { expect, test } from "@playwright/test";

test("should have correct title", async ({ page }) => {
  await page.goto("/");

  const title = await page.title();

  expect(title).toBe("Exakte Berechnung");
});
