import { test,expect } from '@playwright/test';

test("To verify search  functionality with valid credentials", async ({ page }) => {
  await page.goto("https://www.apollo247.com/lab-tests");

  await page.getByPlaceholder('Search for lab tests').first().click();
  await page.getByPlaceholder('Search for lab tests').last().fill("Diabetes");

  const items = page.locator('li');

await expect(items.first()).toBeVisible();

const count = await items.count(); 
await page.waitForTimeout(3000);
expect(count).toBeGreaterThan(0);

}) 

test("To verify search  functionality with invalid credentials", async ({ page }) => {
  await page.goto("https://www.apollo247.com/lab-tests");

  await page.getByPlaceholder('Search for lab tests').first().click();
  await page.getByPlaceholder('Search for lab tests').last().fill("ezbon"); 

  await expect(page.locator('text=No Results')).toBeVisible();
});

