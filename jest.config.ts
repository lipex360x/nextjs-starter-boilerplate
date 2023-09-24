import type { Config } from 'jest'

export default <Config>{
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!**/node_modules/**',
    '!<rootDir>/src/**/index.{ts,tsx}',
    '!<rootDir>/src/app/**',
    '!<rootDir>/src/lib/**',
    '!<rootDir>/src/types/**',
    '!<rootDir>/src/styles/**',
    '!<rootDir>/src/providers/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
  },
}
