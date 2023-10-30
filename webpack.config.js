
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.jsx'),
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  //entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    publicPath: '/',
    filename: 'bundle-[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    //chunkFilename: 'chunk[id]-[chunkHash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: false,
    }),
  ],
  optimization: {
    splitChunks: {
      //chunks: 'all',
      // name: 'vendor',
    },
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'webpack')],
  },
  resolve: {
    /*
    alias: {
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@css': path.resolve(__dirname, 'public/css'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@image': path.resolve(__dirname, 'public/img'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@component': path.resolve(__dirname, 'src/components'),
    },
    */
    symlinks: false,
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'public/css'),
          path.resolve(__dirname, 'src'),
        ],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'public/img'),
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'public/font'),
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules)/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      },
    ],
  },
}
