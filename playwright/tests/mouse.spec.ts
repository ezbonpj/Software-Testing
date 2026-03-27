import {test,expect} from '@playwright/test'

test("Mouse drag n drop",async ({page})=>{ 
    await page.goto("https://demo.automationtesting.in/Static.html");

    const sLogo = await page.locator("#angular");
    const demoLogo = await page.locator("#mongo");
    const selLogo = await page.locator("#node");

      const destination = await page.locator("#droparea"); 

      await sLogo.dragTo(destination);
      await page.waitForTimeout(2000);
     
      await demoLogo.dragTo(destination);
      await page.waitForTimeout(2000);
  
      await selLogo.dragTo(destination);
      await page.waitForTimeout(2000);




})