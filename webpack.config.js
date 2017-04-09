const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 resolve: {
 modules: [path.resolve(__dirname, './src'), 'node_modules']
 },
 */
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: { modules: true }
        }],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
};
