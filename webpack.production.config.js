'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  // The entry file. All your app roots fromn here.
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  // Where you want the output to go
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [

    // handles creating an index.html file and injecting assets. necessary because assets
    // change name because the hash part changes. We want hash name changes to bust cache
    // on client browsers.
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // extracts the css from the js files and puts them on a separate .css file. this is for
    // performance and is used in prod environments. Styles load faster on their own .css
    // file as they dont have to wait for the JS to load.
    new ExtractTextPlugin('[name]-[hash].min.css'),
    // handles uglifying js
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    // creates a stats.json
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    // plugin for passing in data to the js, like what NODE_ENV we are in.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      // '_api_': '"https://dev-hobs.fleet.zone/api"'
    })
  ],

  module: {
    // Runs before loaders
    // loaders handle the assets, like transforming sass to css or jsx to js.
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
      // we extract the styles into their own .css file instead of having
      // them inside the js.
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?minimize=true&modules&localIdentName=[name]---[local]---[hash:base64:5]',
          'sass-loader'
        ],
        publicPath: "/"
      })
    }, {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name]-[hash].[ext]'
    }, {
      test: /\.(ttf|otf|eot|svg|jpg|png)(\?[a-z0-9#=&.]+)?$/,
      loader: 'file-loader?limit=10000&name=files/[name]-[hash].[ext]'
    }]
  }
};
