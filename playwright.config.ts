import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 60000, // <-- tiempo máximo para *cada* test

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1, // Siempre usar un solo worker
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',

  //reportes agregados con allure
reporter: [
  ['line'],
  ['allure-playwright']
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    locale: 'es-ES',

    actionTimeout: 60000, // <-- tiempo máximo para *cada acción* (click, fill, etc.)
    navigationTimeout: 60000, // <-- tiempo para navegación (page.goto)

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://sts-beta.ationet.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DAtionet%26redirect_uri%3Dhttps%253A%252F%252Fconsole-beta.ationet.com%252F%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520email%2520offline_access%26state%3DOpenIdConnect.AuthenticationProperties%253D_OGe8dmsExaDYqt38-ja-s-cQHpoPnow4UH4e607moEoUWiprM8LR8GLcNVaZvB0uxbFaW1srz8irJgEmZX4TPB6CAMXrXT4qR5ClwCOwJyjX-9J-FVkGciqfQE15vMC5rXEwxRHxaGJ8l9QLRaU2Q-QBLBOVonoYxMxQoU-XdcU97myq_r21MZgpByGdO134y40qfozvL3p2HsvwG6fQxqunTXdKQy5Awz-RZ-THOVn_ekHHO0YUe5rabCSZmvR%26nonce%3D638811208484399282.ZGY5YThlMDUtYTRlNC00OWUyLTgwY2UtZDYxNzg1YWZjZTA4YWFiNWNiYWUtMWM3OC00ZDcyLWJkZWYtMGRiNTFhMzU0MDM2%26x-client-SKU%3DID_NET%26x-client-ver%3D1.0.40306.1554',

    

    launchOptions:{
      slowMo: 0
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
