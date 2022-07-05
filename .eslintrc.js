module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "prettier/prettier": "off"
    "prettier/prettier": ["off", { endOfLine: "auto" }],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"]
      }
    ]
  }
};
