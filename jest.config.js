const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
    moduleNameMapper: {
        "@assets/(.*)$": "<rootDir>/public/assets/$1",
        "@pages/(.*)$": "<rootDir>/pages/$1",
        "@styles/(.*)$": "<rootDir>/styles/$1",
        "@components/(.*)$": "<rootDir>/components/$1",
        "^@/(.*)$": "<rootDir>/$1",
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)