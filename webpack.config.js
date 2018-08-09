const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production'

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
})

const DefinePluginConfig = new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })

module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
  entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.jsx')],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: { limit: 10000 },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@scenes': path.resolve(__dirname, 'src/scenes/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@stores': path.resolve(__dirname, 'src/stores/'),
      '@services': path.resolve(__dirname, 'src/services/'),
    }
  },
  output: dev ? {
    filename: 'build-bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: '/'
  } : {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '/build'),
    publicPath: '/'
  },
  mode: dev ? 'development' : 'production',
  plugins: dev
    ? [
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin(),
    ]
    : [HTMLWebpackPluginConfig, DefinePluginConfig],
}
