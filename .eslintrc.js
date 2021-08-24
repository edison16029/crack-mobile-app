module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['jest', 'prettier', 'react-native'],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-inline-styles': 'off',
  },
};
