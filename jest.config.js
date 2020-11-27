module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  roots: ['<rootDir>/src/library'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1'
  },
  collectCoverage: true,
  verbose: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/.node/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
