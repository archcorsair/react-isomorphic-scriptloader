module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    require.resolve('eslint-plugin-import/config/typescript'),
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    semi: 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'eol-last': 2,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
}
