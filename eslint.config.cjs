// eslint.config.cjs
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
];
