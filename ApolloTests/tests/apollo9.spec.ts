import {test,expect} from "@playwright/test"

test("Validating the Cart option",async ({page})=>{ 
    test.setTimeout(120000);
    
    await page.goto("https://www.apollo247.com/lab-tests/"); 

    await page.locator('#loginPopup').click();  

    await page.locator("//input[@name='mobileNumber']").fill("9447273606"); 

    await page.getByRole('button', { name: 'Continue' }).click();  

    // Step 4: Wait for OTP entry (you have 20 seconds)
    await page.waitForTimeout(20000);

    // Step 5: Click Verify
    const verifyBtn = page.getByRole('button', { name: 'Verify' });
    await verifyBtn.click();

    // Step 6: Wait for UI to settle
    await page.waitForLoadState('networkidle'); 

    // Step 7: Close callback popup 
    const popup = page.locator('div[class*="CallbackWidget_popUpOpen"]');
    await popup.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    if (await popup.isVisible().catch(() => false)) {
        console.log("Closing callback popup...");
        await popup.locator('img[alt="close"]').click();
    }  

    // Step 8: Click View All
    const viewAllLink = page.locator("//a[@title='Top Booked Tests - View All']");
    await viewAllLink.waitFor({ state: 'visible' });
    await viewAllLink.click();

    // Step 9: Wait for listing page to load
    await page.waitForLoadState('networkidle');

    // Step 10: Wait for Add buttons to appear
    const addButtons = page.locator('//div[contains(@class,"pZ")]//button[.//span[text()="Add"]]');
    await addButtons.first().waitFor({ state: 'visible' });

    // Step 11: Click first 5 Add buttons
    for (let i = 0; i < 5; i++) {
        await addButtons.nth(i).click();
        await page.waitForTimeout(500);
    }

    // Step 12: Assert cart badge shows 5
    const cartBadge = page.locator('//img[@alt="cart-icon"]/parent::span/following-sibling::span');
    await expect(cartBadge).toHaveText('5');
})