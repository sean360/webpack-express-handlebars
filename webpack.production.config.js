const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//this would normally import all other dependencies for the project
	entry: {
		'login': './src/login.js',
		'image': './src/image.js'
	}, 
	output: {
		filename: '[name].[contenthash].js', //js file created by webpack
		path: path.resolve(__dirname, './dist'), //webpack will create this directory if it does not exist
		publicPath: '/static/'
	},
	mode: 'production', //current environment
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 10000,
			automaticNameDelimiter: '_'
		}
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
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			chunks: ['login', 'vendors_image_login'],
			title: 'New Title',
			template: 'src/login.hbs'
		}),
		new HtmlWebpackPlugin({
			filename: 'image.html',
			chunks: ['image', 'vendors_image_login'],
			title: 'Image Page',
			template: 'src/image.hbs'
		})
	]
}