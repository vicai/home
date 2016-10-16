var common = require('./webpack.config.common');

module.exports = {
  module: {
    loaders: [
      common.jsLoader,
      common.cssLoader,
      common.jsonLoader,
    ]
  },
  postcss: common.postcss,
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devtool: 'eval',
};

