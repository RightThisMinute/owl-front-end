
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const babelPresetEnvExclude = require('./config/babel-preset-env.exclude')


const babelPluginRelay = ['relay', { schema: 'data/schema.graphqls', }]

const styleRules = {
	test: /\.p?css$/,
	exclude: /node_modules/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: { importLoaders: 1 },
			},
			'postcss-loader',
		],
	}),
}

const fileRules = {
	test: /\.((pn|sv|jpe?)g|gif)$/,
	use: ['file-loader'],
}

const server = {

	target: 'node',
	entry: './build/unbundled/server.js',

	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build')
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						plugins: [babelPluginRelay],
					},
				}],
			},
			styleRules,
			fileRules,
		]
	},

	devtool: 'source-map',

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		// Overwrites the same file created by the browser webpack config. A loader
		// needs to be specified to take care of the import statements and it wont
		// work without also outputting a file. There has to be a better way to
		// handle this, but I want to focus on other parts for now.
		// @todo: make this less bad.
		new ExtractTextPlugin('public/main.css'),
	]
}


const browser = {

	target: 'web',
	entry: './build/unbundled/browser.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build/public')
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['env', {
								debug: true,
								useBuiltIns: true,
								targets: { browsers: ['last 2 versions'] },
								exclude: babelPresetEnvExclude
							}]
						],
						plugins: [babelPluginRelay],
					},
				}],
			},
			styleRules,
			fileRules,
		]
	},

	devtool: 'source-map',

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new ExtractTextPlugin('main.css'),
	]

}

console.log('NODE_ENV', JSON.stringify(process.env.NODE_ENV || 'development'))

module.exports = [browser, server]
