const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 10000,
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/core/domain/**/*.logic.ts',
  ],
  coveragePathIgnorePatterns: ['server.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
  setupFiles: ['<rootDir>/src/__tests__/setup.ts'],
};