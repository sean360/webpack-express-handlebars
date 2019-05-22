const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'login': './src/login.js',
		'image': './src/image.js'
	}, //this would normally import all other dependencies for the project
	output: {
		filename: '[name].bundle.js', //js file created by webpack
		path: path.resolve(__dirname, './dist'), //webpack will create this directory if it does not exist
		publicPath: ''
	},
	mode: 'development', //current environment
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		index: 'index.html',
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: [ 'transform-class-properties' ]
					}
				}
			},
			{
				test: /\.hbs$/,
				use: [
					'handlebars-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			chunks: ['login'],
			title: 'Login',
			template: 'src/login.hbs'
		}),
		new HtmlWebpackPlugin({
			filename: 'image.html',
			chunks: ['image'],
			title: 'New Title',
			template: 'src/image.hbs'
		})
	]
}