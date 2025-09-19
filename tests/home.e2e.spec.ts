import { test, expect } from '@playwright/test';

test('homepage loads and has hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Moderní IT bez starostí/i })).toBeVisible();
});

test('legal pages are reachable from footer', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Ochrana soukromí/i }).click();
  await expect(page).toHaveURL(/.*pravo\/ochrana-soukromi/);
});


