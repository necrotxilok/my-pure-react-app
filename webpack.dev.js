/** @format */

const { merge } = require('webpack-merge'),
  common = require('./webpack.config'),
  path = require('path'),
  package = require('./package')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: false,
    port: package.config.port || 9000,
  },
})
