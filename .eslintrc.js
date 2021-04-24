const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'semi': [0],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'space-before-function-paren': ["error", "always"],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'import/no-absolute-path': [0], // 关闭不能使用绝对路径导入模块
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-console': 0
  },
  // "settings": {
  //   "import/resolver": {
  //     node: {
  //       paths: ['src']
  //     },
  //     vite: {
  //       config: {
  //         '@': path.resolve(__dirname, './src')
  //       }
  //     }
  //   }
  // }
};
