module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "react-app"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  overrides: [
    {
      files: "**/*.test.js",
      env: {
        jest: true,
      },
    },
  ],
};
