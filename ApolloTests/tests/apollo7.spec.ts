import { test, expect } from '@playwright/test';

test("Upload Prescription", async ({ page }) => {

  await page.goto("https://www.apollo247.com/lab-tests/");

  // Step 1: Click Upload card
  await page.getByRole('heading', { name: 'Upload and Order' }).click();

  // Step 2: Enter mobile
  await page.locator("input[name='mobileNumber']").fill("9447273606");

  // Step 3: Click Continue
  await page.getByRole('button', { name: 'Continue' }).click();
  /*
  // Step 4: Pause for OTP
  await page.pause(); 
  */

   // Step 4: Wait for OTP entry (you have 30 seconds)
await page.waitForTimeout(15000);


  // Step 5: Click Verify
  const verifyBtn = page.getByRole('button', { name: 'Verify' });
  await verifyBtn.click();

  // Step 6: Wait for UI to settle (better than fixed timeout)
  await page.waitForLoadState('domcontentloaded');

  //  Step 7: Close callback popup 
  const popup = page.locator('div[class*="CallbackWidget_popUpOpen"]');

  await popup.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});

  if (await popup.isVisible().catch(() => false)) {
    console.log("Closing callback popup...");
    await popup.locator('img[alt="close"]').click();
  }

  // Step 8: Click Upload card AGAIN
  await page.getByRole('heading', { name: 'Upload and Order' }).click();

  // Step 9: Validate redirect
  await page.waitForURL(/upload-prescription/, { timeout: 5000 }); 
  await page.waitForTimeout(5000);
  console.log("Current URL:", page.url());
  await expect(page).toHaveURL(/upload-prescription/);

});