/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackConfigBase = require('./webpack.config.base');
const WebpackDevServerConfig = require('./webpack.dev.server.config');

module.exports = merge(WebpackConfigBase, {
  entry: path.resolve('src/app.ts'),
  output: {
    path: path.resolve('public'),
    publicPath: 'public',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin()
  ],
  devServer: WebpackDevServerConfig
});
