module.exports = function (config) {

  config.set({
    browsers: ['PhantomJS'],

    frameworks: [
      'mocha',
    ],

    reporters: ['progress', 'beep'],

    files: [
      { pattern: 'karma-webpack-tests.js', watched: true }
    ],

    preprocessors: {
      'karma-webpack-tests.js': [
        'webpack',
        'sourcemap'
      ]
    },

    webpack: {
      devtool: 'eval',

      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
