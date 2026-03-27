import { test, expect } from '@playwright/test';

test('XPath practice on live site', async ({ page }) => {
  await page.goto('https://www.apollo247.com/lab-tests');

//await page.getByAltText("Full Body Checkup icon").first().click(); 
await page.locator(
 "//h2[contains(text(),'Doctor Created Health Checks')]/ancestor::div[contains(@class,'GridSection')]//a[@href='/lab-tests-category/full-body-checkup']").click();

 await page.waitForTimeout(3000);
});


/*
<p class="nd gd
      vV
      
      
      ">Full Body Checkup</p>
      */