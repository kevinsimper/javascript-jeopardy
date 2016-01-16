var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css?modules', 'autoprefixer', 'sass']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'JS Jeopardy',
    filename: './index.html',
    template: './index.html',
    inject: true
  })]
}
