module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'prefer-destructuring': 0,

    'comma-dangle': ['error', 'always-multiline'],
  },
  plugins: ['react', 'react-hooks'],
};