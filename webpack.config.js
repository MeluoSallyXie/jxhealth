module.exports = {
  entry: './app/js/main.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  devServer: {
    hot: true,
    inline: true
  }
}
