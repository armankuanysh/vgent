module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  env: {
    node: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    'no-useless-constructor': 0,
    camelcase: 'off',
  },
}
