module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: false,
  printWidth: 110,
  arrowParens: "always",
  plugins: [require("./merged-prettier-plugin")],
}
