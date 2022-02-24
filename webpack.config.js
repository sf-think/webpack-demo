module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 文字加hash是为了取消缓存，以便更新
    filename: "[name].[contenthash].js",
  },
};
