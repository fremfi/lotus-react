var path = require('path');
var Webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'client', 'main.jsx');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Webpack Constants
 */
const METADATA = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
}


module.exports = {
	entry: {
		'webpack-dev-server': 'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
		'webpack-hot-reload': 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'main': mainPath// Appʼs entry point
	},
	output: {
		path: buildPath,
		filename: '[name].bundle.js'
	},
	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js$/,
		// 		exclude: /node_modules/,
		// 		loader: 'jshint-loader'
		// 	}
		// ],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg|ttf|eot)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limitTo=25000'
			}
		]
	},
	plugins: [
	    new Webpack.HotModuleReplacementPlugin(),
	    new Webpack.NoErrorsPlugin(),
	    new HtmlWebpackPlugin({filename: '../index.html', template: './client/index.html', chunksSortMode: 'none'}),
	    new CopyWebpackPlugin([{from: 'client/assets', to: '../assets'}])
  	],
	devtool: 'eval',

	devServer: {
		outputPath: buildPath,
		port: METADATA.port,
    host: METADATA.host,
    proxy: {
      '/api/*' : 'http://localhost:8080',
    }
  },

	resolve: {
		extensions: ['', '.js', '.jsx', '.es6']
	}
}