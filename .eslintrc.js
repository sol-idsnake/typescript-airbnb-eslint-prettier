module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    // "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    // "import/no-mutable-exports": 0,
    // "no-labels": 0,
    // "no-restricted-syntax": 0,
  },
};
