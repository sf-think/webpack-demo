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
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.styl$/i,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
};
