import { test, expect } from '@playwright/test';

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

test("Vital organs", async ({ page }) => {
  // Step 1: Go to lab tests landing page
  await page.goto("https://www.apollo247.com/lab-tests/");

  // Step 2: Click "Vital Organs - View All"
  const viewAllLink = page.locator("//a[@title='Vital Organs - View All']");
  await viewAllLink.waitFor({ state: 'visible' });
  await viewAllLink.click();

  // Step 3: Wait for vital organs category listing page
  await page.waitForURL("**/category-listing/vital-organs**");
  await page.waitForLoadState('networkidle');

  // Step 4: Collect all card titles upfront
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

  // Step 5: For each card — click, validate URL, go back, repeat
  for (let i = 0; i < cardTitles.length; i++) {
    const title = cardTitles[i];
    const expectedSlug = toSlug(title);
    const expectedUrlFragment = `/lab-tests-category/${expectedSlug}`;

    console.log(`[${i + 1}/${cardTitles.length}] Clicking: "${title}" → expecting: ${expectedUrlFragment}`);

    // Wait for listing page to be ready
    await page.waitForURL("**/category-listing/vital-organs**");
    await page.waitForLoadState('networkidle');
    await page.locator('.CategoryListing_categoryCardsContainer__9_BfT')
      .waitFor({ state: 'visible', timeout: 20000 });

    // Locate and click the specific card
    const card = page.locator(`.CategoryListing_catCard__RJSmc[title="${title}"]`);
    await card.waitFor({ state: 'visible', timeout: 20000 });
    await card.scrollIntoViewIfNeeded();
    await card.click();

    // Wait for navigation to card detail page
    await page.waitForFunction(
      () => !window.location.href.includes('category-listing'),
      { timeout: 15000 }
    );

    // Validate the URL contains the expected slug
    const currentUrl = page.url();
    console.log(`  ✓ Navigated to: ${currentUrl}`);
    expect(currentUrl).toContain(expectedUrlFragment);

    // Go back to listing page for next card
    await page.goBack();
    await page.waitForURL("**/category-listing/vital-organs**");
    await page.waitForLoadState('networkidle');
  }

  console.log(`\n All ${cardTitles.length} cards validated successfully!`);
});