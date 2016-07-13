module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/resources',
    filename: "bundle.js"
  },
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
