var path = require('path');
var Webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.jsx');


module.exports = {
	context: path.resolve('src'),
	entry: [
		mainPath
	],
	output: {
		path: buildPath,
		publicPath: '/public/',
		filename: 'bundle.js'
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

	resolve: {
		extensions: ['', '.js', '.jsx', '.es6']
	}
}