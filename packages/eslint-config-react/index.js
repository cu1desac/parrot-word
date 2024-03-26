module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
		"plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  // 我手动添加上了 “react” 和 “@typescript-eslint”
  plugins: ["react-refresh", "react", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // react/react-in-jsx-scope可以避免tsx非得引入React
    "react/react-in-jsx-scope": "off",
    // import/extensions 我手动添加的 避免导入tsx文件报错
    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   { js: "never", ts: "never", tsx: "never", jsx: "never" },
    // ],
    "import/extensions": "off",

		// 关闭默认导出
    'import/prefer-default-export': 'off',

  },
  // 忘了这个parserOptions  project：“./tsconfig.json”是自带的还是自己添加的了
  // parserOptions: {
  //   project: "./tsconfig.json",
  // },

  /* 配置解析器的选项，例如指定ECMAScript版本、源代码类型和JSX的pragma。 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    // tsconfigRootDir: __dirname,
  },

  /* 配置一些特定的设置，例如React的版本和import配置 */
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
