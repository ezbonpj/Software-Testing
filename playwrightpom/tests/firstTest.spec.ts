import {test,expect } from "@playwright/test"

import { LoginPOM } from "../pages/login";


test("To validate the login functionality with valid credentials",async ({page})=>{ 
await page.goto("https://www.saucedemo.com");

const loginPage = new LoginPOM(page); 

await loginPage.performLoginAction('standard_user','secret_sauce');

await expect(page).toHaveURL(/inventory/);

});
 

