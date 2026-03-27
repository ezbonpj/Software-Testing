import {test,expect,Page} from  "@playwright/test";
import { LoginPOM } from "../pages/login"; 

let page:Page;
let loginPage: LoginPOM;
test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPOM(page)
})