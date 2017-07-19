
const path = require('path')
const webpack = require('webpack')
const babelPresetEnvExclude = require('./config/babel-preset-env.exclude')

const babelPluginRelay = ['relay', { schema: 'data/schema.graphqls', }]


const server = {

	target: 'node',
	entry: './build/unbundled/server.js',

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
		]
	},

	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build')
	},

	devtool: 'source-map',

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	]
}


const browser = {

	target: 'web',
	entry: './build/unbundled/browser.js',

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
			}
		]
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build/public')
	},

	devtool: 'source-map',

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	]

}

console.log('NODE_ENV', JSON.stringify(process.env.NODE_ENV || 'development'))

module.exports = [browser, server]
