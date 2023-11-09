
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    // Vendor
    vendor: ['lodash', 'react', 'react-dom'],
    // Themes
    default: {
      import: './src/themes/default',
      dependOn: 'vendor',
      filename: 'themes/[name].js',
    },
    colorize: {
      import: './src/themes/colorize',
      dependOn: 'vendor',
      filename: 'themes/[name].js',
    },
    // Application
    app: {
      import: './src/index.jsx',
      dependOn: 'vendor',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/app'),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        if (pathData?.chunk?.filenameTemplate) {
          let template = pathData.chunk.filenameTemplate
          template = template.replace('.js', '.css')
          return template
        }
        return '[name].css'
      }
    }),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@themes': path.resolve(__dirname, 'src/themes'),
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
