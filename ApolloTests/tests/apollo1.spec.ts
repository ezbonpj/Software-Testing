import { test, expect } from '@playwright/test';

function toSlug(title: string): string {
  // Hardcode only the exceptions
  if (title === "Reproductive & Fertility") return "reproductive-fertility";

  // All other cards follow the standard patterna
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
} 


test("Validate Doctor Created Health Checks tiles", async ({ page }) => {
  // Step 1: Go to lab tests landing page
  await page.goto("https://www.apollo247.com/lab-tests/");

  // Step 2: Click "Doctor Created Health Checks - View All"
  const viewAllLink = page.locator("//a[@title='Doctor Created Health Checks - View All']");
  await viewAllLink.waitFor({ state: 'visible' });
  await viewAllLink.click();

  // Step 3: Wait for category listing page
  await page.waitForURL("**/category-listing/doctor-created-health-check**");
  await page.waitForLoadState('networkidle');

  // Step 4: Collect all card titles dynamically
  const cards = page.locator('.CategoryListing_catCard__RJSmc');
  await cards.first().waitFor({ state: 'visible', timeout: 15000 });

  const cardCount = await cards.count();
  console.log(`Total cards found: ${cardCount}`);
  expect(cardCount).toBeGreaterThan(0);

  const cardTitles: string[] = [];
  for (let i = 0; i < cardCount; i++) {
    const title = await cards.nth(i).getAttribute('title');
    cardTitles.push(title ?? `card-${i}`);
  }
  console.log('Cards found:', cardTitles);

  // Step 5: Click each card and validate URL
  for (let i = 0; i < cardTitles.length; i++) {
    const title = cardTitles[i];
    const expectedSlug = toSlug(title);
    const expectedUrlFragment = `/lab-tests-category/${expectedSlug}`;

    console.log(`[${i + 1}/${cardTitles.length}] Clicking: "${title}" → expecting: ${expectedUrlFragment}`);

    // Navigate back to listing page
    await page.goto("https://www.apollo247.com/category-listing/doctor-created-health-check");
    await page.waitForLoadState('domcontentloaded');
    await page.locator('.CategoryListing_categoryCardsContainer__9_BfT')
      .waitFor({ state: 'visible', timeout: 20000 });

    // Locate and click the card
    const card = page.locator(`.CategoryListing_catCard__RJSmc[title="${title}"]`);
    await card.waitFor({ state: 'visible', timeout: 20000 });
    await card.scrollIntoViewIfNeeded();
    await card.click();

    // Wait for navigation away from listing page
    await page.waitForFunction(
      () => !window.location.href.includes('category-listing'),
      { timeout: 15000 }
    );

    // Assert URL contains expected slug (query params like ?source=... are ignored)
    const currentUrl = page.url();
    console.log(`  ✓ Navigated to: ${currentUrl}`);
    expect(currentUrl).toContain(expectedUrlFragment);
  }

  console.log(`\n All ${cardTitles.length} cards validated successfully!`);
});