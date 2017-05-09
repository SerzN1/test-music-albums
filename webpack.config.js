'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '_api_': '"http://musicbrainz.org/ws/2/"'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    proxy: {
      '/api/**': {
        target: 'http://musicbrainz.org/ws/2/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: true
      }
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
        'sass-loader'
      ]
    }, {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|otf|eot|svg|jpg|png)(\?[a-z0-9#=&.]+)?$/,
      loader: 'file-loader'
    }]
  }
};
