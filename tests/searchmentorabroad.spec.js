import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Slow down every Playwright action
  page.setDefaultTimeout(60000);

  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');

  await page.waitForTimeout(2000);
  await page.locator('html').click();

  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Study Abroad' }).click();

  await page.waitForTimeout(2000);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).dblclick();

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('K');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('Kabita ');

  await page.waitForTimeout(2000);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('Enter');

  await page.waitForTimeout(2000);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).click();

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('j');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('j');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).press('CapsLock');

  await page.waitForTimeout(1500);
  await page.getByRole('searchbox', { name: 'Search by name, country,' }).fill('japan');

  await page.waitForTimeout(3000);
});