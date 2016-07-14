var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/resources',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({__DEV__: 'false'})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      }
    ]
  }
};
