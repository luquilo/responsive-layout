const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  module: {
    rules: [
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/html",
    },
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: true,
    },
    open: true,
    port: 9001,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
});
