import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  collectCoverage: true,

  moduleNameMapper: {
    '@modules(.*)$': '<rootDir>/src/modules/$1',
    '@commons(.*)$': '<rootDir>/src/commons/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
  },

  // collectCoverageFrom: [
  //   '<rootDir>/src/**/utils/*.(ts|tsx)',
  //   '!<rootDir>/src/**/utils/index.(ts|tsx)',
  //   '<rootDir>/src/**/utils/formatters/*.(ts|tsx)',
  //   '!<rootDir>/src/**/utils/formatters/index.(ts|tsx)',
  //   '<rootDir>/src/**/utils/helpers/*.(ts|tsx)',
  //   '!<rootDir>/src/**/utils/helpers/index.(ts|tsx)',
  //   '!<rootDir>/src/**/utils/constants/*',
  //   '<rootDir>/src/**/utils/module/**/*',
  //   '!<rootDir>/src/**/utils/module/**/index.ts',
  // ],

  moduleDirectories: ['node_modules', '<rootDir>'],

  coverageDirectory: 'coverage',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/configs/jest-setup.ts'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
};

export default createJestConfig(customJestConfig);
