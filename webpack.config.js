module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, use: {
        loader: 'babel-loader'
      }, exclude: /node_modules/ }
    ]
  }
}