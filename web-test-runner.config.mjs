import { chromeLauncher } from '@web/test-runner';

export default {
  files: 'test/**/*.test.js',
  nodeResolve: true,
  coverage: true,
  browsers: [
    chromeLauncher(),
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
