import { test, expect } from '@playwright/test';

test("Popular Health Checkup Packages", async ({ page }) => {
  // Step 1: Go to lab tests landing page
  await page.goto("https://www.apollo247.com/lab-tests/");

  // Step 2: Click "Top Booked Tests - View All"
  const viewAllLink = page.locator("//a[@title='Popular Health Checkup Packages - View All']");
  await viewAllLink.waitFor({ state: 'visible' });
  await viewAllLink.click();

  // Step 3: Wait for navigation to complete
  await page.waitForURL("**/test-listing/popular-health-checkup-packages**", { timeout: 15000 });

  // Step 4: Wait for DOM only (not full network — safer for Apollo247)
  await page.waitForLoadState('domcontentloaded');

  // Step 5: 5 second pause to visually observe the page ✅
  await page.waitForTimeout(5000);

  // Step 6: Assert the URL
  expect(page.url()).toContain("https://www.apollo247.com/test-listing/popular-health-checkup-packages");
});