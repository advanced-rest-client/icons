import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'test/**/*.test.js',
  nodeResolve: true,
  coverage: true,
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        channel: 'chrome'
      },
    }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {
        headless: true,
        firefoxUserPrefs: {
          'browser.cache.disk.enable': false,
          'browser.cache.memory.enable': false
        }
      },
    }),
    playwrightLauncher({
      product: 'webkit',
      launchOptions: {
        headless: true
      },
    }),
  ],
  testFramework: {
    config: {
      timeout: '60000',
    },
  },
  browserStartTimeout: 60000,
  testsStartTimeout: 60000,
  testsFinishTimeout: 60000,
};
