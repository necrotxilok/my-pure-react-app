
const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const path = require('path')
const package = require('./package')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  //devtool: 'source-map',
  output: {
    publicPath: '/app/',
  },
  watchOptions: {
    ignored: '**/node_modules',
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
