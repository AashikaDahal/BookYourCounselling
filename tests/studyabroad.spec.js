import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Slow down every Playwright action by 1 second
  page.setDefaultTimeout(60000);

  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Study Abroad' }).click();

  await page.waitForTimeout(1000);
  await page.locator('label').filter({ hasText: 'USA' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Australia' }).check();

  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'UK' }).check();

  await page.waitForTimeout(1000);
  await page
    .getByRole('article')
    .filter({ hasText: 'BKBirat K CSydney,' })
    .getByRole('button')
    .click();

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Popular Full Consultation 60' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Continue Booking' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test');

  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Phone Number', exact: true })
    .fill('(982) 097-9097');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'Current School/College' })
    .fill('test');

  await page.waitForTimeout(1000);
  await page.getByLabel('Education Level').selectOption('high_school');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: "Guardian's Phone Number (" })
    .fill('+');

  await page.waitForTimeout(1000);
  await page
    .getByRole('textbox', { name: 'How can this consultant help' })
    .fill('test test test test');

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Submit Your Request' }).click();

  // Final pause
  await page.waitForTimeout(3000);
});