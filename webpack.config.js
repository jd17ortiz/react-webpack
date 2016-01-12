'use strict';

const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const target = process.env.npm_lyfecycle_event;

const paths = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: paths.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: paths.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: paths.app
      }
    ]
  },
  plugins: [
    new htmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'TODO App',
      appMountId: 'app'
    })
  ]
};

if( target === 'start' || !target ) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port:process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    //devtool: 'eval-source-map'
  });
}

if( target === 'build' ) {
  module.exports = merge(common, {});
}
