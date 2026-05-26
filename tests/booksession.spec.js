import { test, expect } from '@playwright/test';

// Makes the whole test run slower
test.slow();

test('test', async ({ page }) => {
  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  // Slow down each action
  await page.waitForTimeout(1000);

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Aash');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Book Session' }).first().click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Premium Counselling Package' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Fri' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: ':00 AM – 10:00 AM' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Book a Session' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Full Name' }).fill('test');
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Current School/College' }).fill('test');
  await page.waitForTimeout(1000);

  await page.getByLabel('Education Level').selectOption('postgrad');
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'How can this mentor help you' }).fill('test test test');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Proceed to Payment' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Phone Number', exact: true }).fill('+98 (079) 798-90998');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Proceed to Payment' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Pay with Fonepay' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Cancel payment' }).click();
});