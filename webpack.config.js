
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  //entry: './src/index.jsx',
  output: {
    publicPath: '/',
    filename: 'bundle-[fullhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'chunk[id]-[chunkhash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
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
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'public/font'),
        use: 'file-loader',
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      },
    ],
  },
}
