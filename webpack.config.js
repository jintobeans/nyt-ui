const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /file-type\/index\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      }
    ],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: isDev ? [new LiveReloadPlugin({appendScriptTag: true})] : [],
}
