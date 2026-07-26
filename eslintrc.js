module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  rules: {
    // No any
    '@typescript-eslint/no-explicit-any': 'error',

    // No unused variables
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // No ts-ignore without description
    '@typescript-eslint/ban-ts-comment': 'error',

    // No console.log in committed code
    'no-console': 'error',
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/'],
}
