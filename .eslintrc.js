module.exports = {
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
  }
};
