const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 文字加hash是为了取消缓存，以便更新
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "src/assets/test.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader 把 css 内容读到 js 里
        // style-loader 把 css-loader 读到的内容变成 style 标签放到 head 里
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
