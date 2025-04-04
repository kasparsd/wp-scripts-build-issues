const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(), // Default WP entry points for blocks.
		index: './src/index.js',
		custom: './src/custom.js',
	},
};
