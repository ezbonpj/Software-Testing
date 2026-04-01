import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 180000,
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**/login.setup.ts',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});