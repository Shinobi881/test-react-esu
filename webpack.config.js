module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, use: {
        loader: 'babel-loader'
      }, exclude: /node_modules/ }
    ]
  }
}