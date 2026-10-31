import {test} from '@playwright/test'
test ('screenshot', async ({ page }) => {
   await page.goto('https://www.google.com');
    await page.screenshot ({
        path:'screenshot2.png',
        fullPage : true
    });
 

});