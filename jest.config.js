module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svgMock.js'
    },
    setupFiles: ['<rootDir>/setupTests.js'],
    transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation|react-navigation-stack|react-native-gesture-handler)/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/lib/', '<rootDir>/assets/', 'dummy*.*'],
    testPathIgnorePatterns: ['node_modules', 'dummy*.*', 'App-test.js'],
    testEnvironment: 'jsdom'
  };
  