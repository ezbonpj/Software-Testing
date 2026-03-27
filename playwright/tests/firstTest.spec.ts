import {test,expect}  from "@playwright/test";


test("To validate the login functionality with valid credentials ",async({page})=>{
    await page.goto("https://www.saucedemo.com/"); 

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole("button",{name:"Login"}).click(); 
    let actualValue  = await page.getByText("Products").textContent();

    await expect.soft(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    await expect.soft(actualValue).toBe("Products");
}); 
/*
test("To validate the login functionality with invalid credentials ",async({page})=>{
    await page.goto("https://www.saucedemo.com/"); 

    await page.locator("#user-name").fill("locked_out_user");
    await page.locator("input[data-test='password']").fill("secret_sauce");

    await page.locator(".submit-button").click(); 

    await expect(page.locator("h3[data-test='error']"))
    .toHaveText("sorry this user is logged out");
}); 
*/

