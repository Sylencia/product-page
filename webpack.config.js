const webpack = require('webpack');

const config = {
  context: `${__dirname}/src`,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './main.js',
  ],
  output: {
    path: `${__dirname}/www`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.css$/,
        loader: ['style', 'css'],
      },
    ],
  },
  resolveLoader: {
    root: [
      `${__dirname}/node_modules`,
    ],
  },
  resolve: {
    root: [
      `${__dirname}/node_modules`,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),  ],
};

module.exports = config;