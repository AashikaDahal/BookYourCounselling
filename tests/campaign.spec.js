import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Makes actions slower
  page.setDefaultTimeout(60000);

  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: '"३० मा ३०"' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Secure Free Spot' }).nth(1).click();

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test');

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Phone Number', exact: true })
    .fill('(986) 979-90765');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Your school/college' })
    .fill('test');

  await page.waitForTimeout(1000);
  await page.getByLabel('Education Level').selectOption('BELOW SEE');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: "Guardian's Phone Number (" })
    .fill('9800000000');

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Secure Free Spot' }).click();

  // Pause after submit
  await page.waitForTimeout(3000);
});