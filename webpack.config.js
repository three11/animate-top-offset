const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/animate-top-offset.js',
	output: {
		filename: 'animate-top-offset.min.js',
		library: 'animateTopOffset',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [new UnminifiedWebpackPlugin()]
};
