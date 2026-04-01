import { test ,expect} from '@playwright/test';

test.use({ storageState: 'auth.json' }); // ✅ load session here

test("To verify add to cart functionality", async ({ page }) => {
  await page.goto("https://www.apollo247.com/lab-tests");
  await page.waitForTimeout(5000);
  
  await page
  .locator("//p[contains(text(),'CBC Test')]\
/ancestor::div[contains(@class,'MX')]\
 //button[.//span[contains(text(),'Add')]]")
  .first()
  .click();
  await page.waitForTimeout(3000); 

  await page.locator("//span[text()='Go To Cart']").click(); 
  //----------------------------------------------------------
  await page.waitForTimeout(10000);//manually click checkbox  
  //-----------------------------------------------
  await page.locator("//button[text()='Select Slot']").click();
  console.log("select slot button is clicked");
  //-------------------------------------------------------
  await page.waitForTimeout(10000);
  //--------------------------------------------------- 
   // Wait until Review Cart button is visible
   const reviewCartBtn = page.locator("//button[text()='Review Cart']");
   await reviewCartBtn.waitFor({state: 'visible',timeout:15000});
await reviewCartBtn.click();

  await page.waitForLoadState('networkidle',{timeout:15000})
   const targetSpan = page.locator("//span[normalize-space(text())='Cbc Test (complete Blood Count)']");
await targetSpan.first().waitFor({state:'visible',timeout:15000});
const count = await targetSpan.count(); 

console.log("Count:", count);   
expect(count).toBe(2); // if you expect 2 spans
});

