const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const Minify = require('optimize-css-assets-webpack-plugin');
const Terser = require('terser-webpack-plugin')


module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"]
      },
    ]
  },
  optimization: {
    minimizer: [ new Minify(), new Terser() ]
  },
  plugins: [
    new MiniCSSExtractPlugin({filename: "[name].[contentHash].css"}),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
})