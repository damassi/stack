const _ = require('lodash-node');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

module.exports = _.assign({}, config, {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
});
