var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  jsLoader: {
    test: /\.js$/,
    include: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'test'),
    ],
    loaders: ['babel', 'eslint']
  },
  cssLoader: {
    test: /\.scss$/,
    loaders: ['style', 'css?localIdentName=vic-[name]-[local]', 'postcss', 'sass']
  },
  jsonLoader: {
    test: /\.json$/,
    loaders: ['json'],
  },
  postcss: [autoprefixer],
};
