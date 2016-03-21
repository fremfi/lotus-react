var path = require('path');
var Webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.jsx');


module.exports = {
	context: path.resolve('src'),
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		mainPath// Your appʼs entry point
	],
	output: {
		path: buildPath,
		publicPath: '/build/',
		filename: 'bundle.js'
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
	    new Webpack.NoErrorsPlugin()
  	],
	devtool: 'eval',

	resolve: {
		extensions: ['', '.js', '.jsx', '.es6']
	}
}