const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')


module.exports = {
  mode: "production",
  ...base,
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "src/assets/test.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
};
