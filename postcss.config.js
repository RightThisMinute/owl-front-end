module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-nested'),
		require('postcss-property-lookup'),
		require('postcss-css-variables'),
		require('autoprefixer'),
	]
}
