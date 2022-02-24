const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 文字加hash是为了取消缓存，以便更新

    filename: "index.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "src/assets/index.html",
    }),
  ],
};
