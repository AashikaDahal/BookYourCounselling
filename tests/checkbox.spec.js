import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://book-my-counselling.vercel.app/explore-mentors');
  await page.getByRole('radio', { name: 'Academic Counselling' }).click();
  await page.getByRole('button', { name: 'Bachelors (Undergraduate)', exact: true }).click();
  await page.getByRole('button', { name: 'Business Management' }).click();
  await page.getByRole('button', { name: 'Engineering' }).click();
  await page.getByRole('button', { name: 'IT' }).click();
  await page.getByRole('button', { name: 'Law' }).click();
  await page.getByRole('button', { name: 'Medical' }).click();
});