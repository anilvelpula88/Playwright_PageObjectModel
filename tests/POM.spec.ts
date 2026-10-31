import { test, expect } from '@playwright/test';
import { LoginPage } from './POMclasses.spec'

test('POM', async ({ page }) => {

    const Login = new LoginPage(page)
    Login.gotoLoginPage()
    Login.Loginmethod('tomsmith', 'SuperSecretPassword!')
    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: 'login' }).click();
});