import {Page,expect} from '@playwright/test'

export class LoginPOM {
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly pageLogo;

    constructor (page:Page){
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByText("Login");
        this.pageLogo = page.locator(".login_logo").textContent();
    } 

    async performLoginAction(uname: string,pass: string){
        await this.usernameInput.fill(uname);
        await this.passwordInput.fill(pass);
        await this.loginButton.click(); 
    }
}