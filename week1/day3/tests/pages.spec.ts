import {test,expect,Page, BrowserContext} from '@playwright/test'
/*

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
*/ 
test('Handling Multiple Windows',async({browser})=>{ 
     const context: BrowserContext  =  await browser.newContext();
     const page: Page = await context.newPage();

     await page.goto("https://demo.automationtesting.in/Windows.html");
     await page.locator("//a[@href='#Multiple']").click();
     const parentPage  = page.url();
     console.log(parentPage); 
     const newPages: any[] = [];
     context.on("page",async (page)=>{
        await page.waitForLoadState();
        newPages.push(page);

     });
     await page.click("//button[@onclick='multiwindow()']");
     await page.waitForTimeout(3000);
     const allPages = context.pages();
     console.log('Total opened tabs is:',allPages.length); 
     let indexPage = page;
     
     for(const currentPage of allPages){
        console.log(await currentPage.title()); 
        if(await currentPage.title()==="Index")
        {
            indexPage = currentPage; 
            break;

        }
     } 
     await indexPage.bringToFront();
     await indexPage.locator("//input[@id='email']").fill("demo@automationtesting.in");
     await indexPage.waitForTimeout(3000);

})
