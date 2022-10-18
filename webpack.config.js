const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: path.join(__dirname, 'src', './index.js')
  },
  output: {
    publicPath: '/',
    path: __dirname + "/dist",
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    watchFiles: ["src/*.html"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets/'),
          to: path.resolve(__dirname, 'dist/assets/')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          }
        }
      },
    ],
  },
  target: "web",
  optimization: {
    runtimeChunk: 'single',
  },
};