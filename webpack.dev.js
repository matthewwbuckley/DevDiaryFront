const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
})