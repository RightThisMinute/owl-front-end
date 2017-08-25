
module.exports = {
	parser: require('postcss-scss'), // For inline comment support in .pcss files.
	plugins: [
		require('postcss-import'),
		require('postcss-property-lookup'),
		require('postcss-css-variables'),
		require('postcss-nested'),
		require('postcss-color-function'),
		require('autoprefixer'),
	]
}
