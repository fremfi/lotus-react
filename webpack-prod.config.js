var path = require('path');
var Webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.jsx');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: [
		mainPath
	],
	output: {
		path: buildPath,
		filename: 'main.js'
	},
	module: {
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
	devtool: 'source-map',

	plugins: [
	    new HtmlWebpackPlugin({filename: '../index.html', template: 'app/index.html', chunksSortMode: 'none'}),
	    new CopyWebpackPlugin([{from: 'app/assets', to: '../assets'}]),
  	],

	resolve: {
		extensions: ['', '.js', '.jsx', '.es6']
	}
}