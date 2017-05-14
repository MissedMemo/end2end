var path = require('path');

const SOURCE_DIR = path.resolve('src');
const OUTPUT_DIR = path.resolve('public');

module.exports = {
  entry: SOURCE_DIR,
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
