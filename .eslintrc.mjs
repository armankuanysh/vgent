export default {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
    requireConfigFile: false
  },
  env: {
    node: true
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  exclude: ['./dist/**/*'],
  rules: {
    "prettier/prettier": "error",
    "no-console": 0,
    "no-useless-constructor": 0,
    "camelcase": "off"
  }
}

// {
//   "root": true,
//
//   "parserOptions": {
//     "sourceType": "module",
//     "ecmaVersion": 2015
//   },
//
//   "env": {
//     "node": true,
//   },
//
//   "extends": ["prettier"],
//   "plugins": ["prettier"],
//
//   "rules": {
//     "prettier/prettier": "error",
//     "no-console": 0,
//     "no-useless-constructor": 0,
//     "camelcase": "off"
//   }
// }
