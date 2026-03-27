import {test,expect} from  "@playwright/test" 

test("verifying  cart",async ({page})=>{
    //step 1 -> go to site
await page.goto("https://www.apollo247.com/lab-tests/"); 
//step2-> click login button 
await page.locator('#loginPopup').getByText('Login').click(); 

 // Step 3: Enter mobile
  await page.locator("input[name='mobileNumber']").fill("9447273606");  
  
  // Step 3: Click Continue
  await page.getByRole('button', { name: 'Continue' }).click();

 // Step 4: Wait for OTP entry (you have 15 seconds)
await page.waitForTimeout(15000);




})