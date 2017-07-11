
const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')


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
					// options: {},
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
	entry: './src/browser.ts',

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
						useBabel: true,
						useCache: true,
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
		new CheckerPlugin
	]

}

module.exports = [server, browser]
