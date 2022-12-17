module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'react/prop-types': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
