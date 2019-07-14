/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackConfigBase = require('./webpack.config.base');

module.exports = merge(WebpackConfigBase, {
  target: 'node',
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test')
      }
    })
  ]
});
