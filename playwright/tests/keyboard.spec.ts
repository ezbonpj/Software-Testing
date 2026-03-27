import {test,expect} from '@playwright/test'

test("Keyboard events",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder("First Name").fill("Robot");
    await page.getByPlaceholder("First Name").press('Tab');

    await page.keyboard.type("Automation");
    await page.keyboard.press("ControlOrMeta+A");
    await page.keyboard.down('Control');

        await page.keyboard.press("C");
    await page.keyboard.up('Control');

        await page.keyboard.press("Tab");
    await page.keyboard.down('Control'); 

        await page.keyboard.press("V");
    await page.keyboard.up('Control'); 

    await page.locator("input[type='email']").pressSequentially("robot.automation@example.com");
    await page.waitForTimeout(3000);


});
 