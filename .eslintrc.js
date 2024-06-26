module.exports = {
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'unused-imports'],
  root: true,
  rules: {
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': 1,
    'no-duplicate-imports': 2,
    'no-empty-function': 0,
    'no-empty-pattern': 2,
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'no-unsafe-optional-chaining': 0,
    'no-unused-vars': 0,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react/no-unstable-nested-components': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': 2,
    'sort-imports': 0,
    // 'sort-keys': [2, 'asc', { caseSensitive: false, minKeys: 2, natural: false }],
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      2,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
