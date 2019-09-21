const path = require("path");
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");

const prodConfig = {
  mode: "production",
  entry: "./src/Editor/index.tsx",
  output: {
    path: path.join(__dirname, "../", "lib"),
    filename: "index.js",
    libraryTarget: "umd"   // 构建后输出通用模式，这一步不要漏了
  },
  externals: {
    react: 'react',
  }
};

module.exports = merge(baseConfig, prodConfig);
