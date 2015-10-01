var path = require('path');

module.exports = function (config) {

  config.set({
    browsers: ['PhantomJS'],

    frameworks: [
      'mocha',
    ],

    reporters: ['progress', 'beep'],

    files: [
      { pattern: 'karma.webpack.tests.js', watched: true }
    ],

    preprocessors: {
      'karma.webpack.tests.js': [
        'webpack',
        'sourcemap'
      ]
    },

    webpack: {
      devtool: 'eval',

      resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [
          path.resolve('./src'),
        ],
        modulesDirectories: [
          'node_modules'
        ]
      },

      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              stage: 0
            }
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
