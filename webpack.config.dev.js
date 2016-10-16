var common = require('./webpack.config.common');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/entrypoint',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      common.jsLoader,
      common.cssLoader,
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 8070,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  postcss: common.postcss,
};
