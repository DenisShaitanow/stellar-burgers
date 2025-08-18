module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
<<<<<<< HEAD
    '^@components$': '<rootDir>/src/components',
    '^@ui$': '<rootDir>/src/components/ui',
    '^@ui-pages$': '<rootDir>/src/components/ui/pages',
    '^@pages$': '<rootDir>/src/pages',
    '^@services$': '<rootDir>/src/services',
    '^@hooks$': '<rootDir>/src/services/hooks',
    '^@selectors$': '<rootDir>/src/services/selectors',
    '^@slices$': '<rootDir>/src/services/slices',
    '^@store$': '<rootDir>/src/services/store',
    '^@thunks(.*)$': '<rootDir>/src/services/thunks$1',
=======
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@ui-pages/(.*)$': '<rootDir>/src/components/ui/pages/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@hooks/(.*)$': '<rootDir>/src/services/hooks/$1',
    '^@selectors/(.*)$': '<rootDir>/src/services/selectors/$1',
    '^@slices/(.*)$': '<rootDir>/src/services/slices/$1',
    '^@store/(.*)$': '<rootDir>/src/services/store/$1',
    '^@thunks/(.*)$': '<rootDir>/src/services/thunks/$1',
>>>>>>> 0da2312a65874aeefb7fbea4f74f59f5ac7089ae
    '^@api$': '<rootDir>/src/others/api/burger-api',
    '^@types/(.*)$': '<rootDir>/src/others/types/types/$1',
    '^@utils/(.*)$': '<rootDir>/src/others/utils/$1',
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
