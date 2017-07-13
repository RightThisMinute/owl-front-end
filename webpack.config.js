
const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')
const webpack = require('webpack')

const babelPresetEnvExclude = require('./config/babel-preset-env.exclude')


const server = {

	target: 'node',
	entry: './src/server.ts',

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'awesome-typescript-loader',
				}],
			}
		]
	},

	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build')
	},

	devtool: 'source-map',

	plugins: [
		new CheckerPlugin
	]
}


const browser = {

	target: 'web',
	entry: './src/browser.tsx',

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'awesome-typescript-loader',
					options: {
						useCache: true,
						useBabel: true,
						babelOptions: {
							presets: [
								['env', {
									debug: true,
									useBuiltIns: true,
									targets: { browsers: ['last 2 versions'] },
									exclude: babelPresetEnvExclude
								}]
							]
						}
					},
				}],
				// exclude: /node_modules/,
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
		new CheckerPlugin,
	]

}

console.log('NODE_ENV', JSON.stringify(process.env.NODE_ENV || 'development'))

module.exports = [browser, server]
