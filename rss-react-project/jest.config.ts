// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: 'jsdom',
//   preset: 'ts-jest',
//   rootDir: './src',
//   moduleNameMapper: {
//     '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
//   },
// };

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
};

export default createJestConfig(config);
