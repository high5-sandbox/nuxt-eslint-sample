import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default withNuxt(
  {
    ignores: ['**/fixtures/**', '**/dist/**'],
  },
  ...compat.extends('plugin:vuejs-accessibility/recommended'),
  {
    files: ['**/*.vue'],
    rules: {
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single', // クオートはシングル
    semi: false, // セミコロンは不要,
  }),
)
