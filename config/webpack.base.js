const path = require("path");
module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", "jsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "../", "src"),
      "@utils": path.resolve(__dirname, "../", "utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx|ts|tsx?$/,
        use: "babel-loader",
        exclude: [/node_modules/, /__test__/]
      },
      // {
      //   test: /\.js|jsx|ts|tsx?$/,
      //   use: "eslint-loader",
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  }
};
