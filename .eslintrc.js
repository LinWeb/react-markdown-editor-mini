module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  plugins: ["html"],
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "@src": "./src"
            },
            extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
          }
        }
      }
    }
  },
  extends: [
    // "eslint:recommended",s
    // "plugin:import/errors",
    // "plugin:import/warnings",
    "plugin:react/recommended",
  ],
};
