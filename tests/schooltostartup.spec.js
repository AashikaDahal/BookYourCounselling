import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Slow execution
  page.setDefaultTimeout(60000);

  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'School to Startup' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test');

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Phone Number' })
    .fill('+9779086807678');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Organization/School' })
    .fill('test');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Pitch About Your Idea Minimum' })
    .fill('test test test test test test test');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Links to Additional Documents' })
    .fill('https://example.com');

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Submit Pitch' }).click();

  // Final pause
  await page.waitForTimeout(3000);
});
