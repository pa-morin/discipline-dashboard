const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./qa",
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    viewport: { width: 1280, height: 900 },
    actionTimeout: 10000,
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" }
    },
    {
      name: "mobile",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        isMobile: true
      }
    }
  ]
});
