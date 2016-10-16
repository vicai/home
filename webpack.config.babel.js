/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';

export default {
  context: __dirname,
  entry: './src/entrypoint',
  output: {
    path: '/build/',
    filename: 'bundle.js',
  },
  module: {
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
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ];
}
return [];
})(),
};
