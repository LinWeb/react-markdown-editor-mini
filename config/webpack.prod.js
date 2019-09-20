const path = require("path");
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");

const prodConfig = {
  entry: "./src/prod.js",
  output: {
    path: path.join(__dirname, "../", "lib"),
    filename: "index.js",
    libraryTarget: "umd"
  }
};

module.exports = merge(baseConfig, prodConfig);
