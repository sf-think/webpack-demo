const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require("./webpack.config.base.js");

module.exports = {
  mode: "development",
  ...base,
  plugins: [],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.cs$/i,
        // css-loader 把 css 内容读到 js 里
        // style-loader 把 csss-loader 读到的内容变成 style 标签放到 head 里
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
};
