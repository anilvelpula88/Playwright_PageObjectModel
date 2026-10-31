import { Page } from '@playwright/test';

export class LoginPage {

    constructor(page: Page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'login' });
    }
    async gotoLoginPage(){
        await page.goto('https://the-internet.herokuapp.com/login');
    }

    async Loginmethod(username: string, password: string) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}