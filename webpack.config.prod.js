var _ = require('lodash-node');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

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
