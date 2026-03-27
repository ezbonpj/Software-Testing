import {test,expect,Page, BrowserContext} from '@playwright/test'


test('Handling windows',async ({browser})=>{
    const context: BrowserContext  = await browser.newContext(); 
    const page: Page  = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Windows.html");

    const parentPage = page.url();
    console.log(parentPage);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), 
        page.click('button:has-text("click")')


    ]);

    await newPage.waitForLoadState();
    console.log(newPage.url());

    await newPage.locator("//a[@class='selenium-button selenium-webdriver text-uppercase fw-bold")
     await newPage.waitForTimeout(3000);

     await page.bringToFront();
     await page.locator("//a[@href='#Seperate']").click();
     await page.waitForTimeout(3000);

});