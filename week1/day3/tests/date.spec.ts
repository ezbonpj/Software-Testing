import {test,expect} from "@playwright/test";

test("Test Date Picker Page",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Datepicker.html");

    await page.locator("#datepicker2").click(); 
    
    await page.waitForTimeout(2000);

    await page.locator("//select[@title = 'Change the year'] ").selectOption('2020');
    await page.locator("//select[@title = 'Change the month']").selectOption('March'); 
    await page.locator("a",{hasText:"23"}).click();

    await page.waitForTimeout(2000); 
}); 


test("Test Date Picker Page-second",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Datepicker.html");

    const targetYear = "1995";
    const targetMonth = "May";
    const targetDay = "15";

    await page.locator("#datepicker1").click();
    await page.waitForTimeout(1000);

    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();

        if (currentYear === targetYear && currentMonth === targetMonth) {
            break;
        }

        await page.locator(".ui-datepicker-prev").click();
        await page.waitForTimeout(500); // pause so you can see each navigation
    }

    // select day
    await page.locator(`//a[text()='${targetDay}']`).click();
    await page.waitForTimeout(2000);
});