module.exports = {
  root: true,
  env: { browser: true, es2020: true },
	extends: ['@repo/eslint-config-react'],


/* 配置一些特定的设置，例如React的版本和import配置 */
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  /* 告诉 ESLint 使用您安装的 @typescript-eslint/parser 包来解析源文件。必填的。 */
  parser: "@typescript-eslint/parser",
  /* 配置解析器的选项，例如指定ECMAScript版本、源代码类型和JSX的pragma。 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    },
    project: true,
    tsconfigRootDir: __dirname
  },

  // extends: [
    // 'eslint:recommended',
		// '@repo/eslint-config-react/index',
		// 'plugin:@repo/eslint-config-react',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
  // ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: '@typescript-eslint/parser',
  // plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		'import/no-extraneous-dependencies': 'off',
  },
}

// module.exports ={
// 	extends: ['@repo/eslint-config-react'],
// }

