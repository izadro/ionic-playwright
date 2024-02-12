import {test, expect} from '@playwright/test';

test('First test on the Ionic app', async ({page}) => {
    await page.goto('http://localhost:8100/tabs/tab1');
    await page.getByRole('button', {name: 'Action 1'}).click();
    await page.getByRole('button', {name: 'Action 2'}).click();
    await page.getByText('Item').nth(2).click();
    await page.getByText('Here\'s a small text').nth(1).click({
        button: 'right'
    });
    await expect(page.locator('ion-content')).toContainText('Here\'s a small text description for the card content. Nothing more, nothing less.');
    await page.locator('#tab-button-tab2 svg').click();
    await page.getByLabel('Input with placeholder').click();
    await page.getByLabel('Input with placeholder').click();
    await page.getByLabel('Input with placeholder').fill('test');
    await page.getByRole('button', {name: 'Send'}).click();
    await page.getByRole('button', {name: 'Clear'}).click();
});