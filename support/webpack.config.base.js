/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin()
    ],
    extensions: ['.css', '.scss', '.sass', '.js', '.json','.ts']
  },
  performance: {
    hints: false
  }
};