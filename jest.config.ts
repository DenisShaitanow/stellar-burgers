module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@components$': '<rootDir>/src/components',
    '^@ui$': '<rootDir>/src/components/ui',
    '^@ui-pages$': '<rootDir>/src/components/ui/pages',
    '^@pages$': '<rootDir>/src/pages',
    '^@services$': '<rootDir>/src/services',
    '^@hooks$': '<rootDir>/src/services/hooks',
    '^@selectors$': '<rootDir>/src/services/selectors',
    '^@slices$': '<rootDir>/src/services/slices',
    '^@store$': '<rootDir>/src/services/store',
    '^@thunks$': '<rootDir>/src/services/thunks',
    '^@shared$': '<rootDir>/src/others',
    '^@api$': '<rootDir>/src/others/api/burger-api',
    '^@types$': '<rootDir>/src/others/types/types',
    '^@utils$': '<rootDir>/src/others/utils',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/setupTests.ts',
    '!src/stories/**/*',
    '!src/components/ui/**/*'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html']
};
