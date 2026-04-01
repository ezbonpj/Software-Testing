
import {test} from "@playwright/test"
import * as readline from "readline"
 
test("Setup: save login session via manual otp",async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto("https://www.apollo247.com/lab-tests");
    await page.locator("#loginPopup").click();
  await page.locator("//input[@name='mobileNumber']").fill("9447273606");
  await page.getByRole('button', { name: 'Continue' }).click();
 
  
  await page.waitForTimeout(20000); // enter OTP here

  await page.getByRole('button', { name: 'Verify' }).click();
  await page.waitForTimeout(8000);
 
    await context.storageState({ path: "auth.json" });
 
    console.log("auth.json saved successfully!");
    
    await context.close();
});
 