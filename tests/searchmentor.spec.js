import { test, expect } from '@playwright/test';

// Makes every Playwright action slow
test.use({
  launchOptions: {
    slowMo: 1000, // 2 seconds delay after each action
  },
});

test('test', async ({ page }) => {
  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).click();
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Aashika');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('S');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('D');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('S');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Software ');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Software Q');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Software Quality ');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Software Quality A');

  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search by name, role, or' }).fill('Software Quality Assurance');
});