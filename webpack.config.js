const webpack = require('@nativescript/webpack');

module.exports = env => {
	webpack.init(env);

	webpack.chainWebpack(config => {
		// config.module
		// 	.rule('vue')
		// 	.test(/\.vue$/)
		// 	.use('vue-loader');
		// options: {
		// 	compilerOptions: {
		// 		isCustomElement: tag => tag === 'ActionBar';
		// 		isCustomElement: tag => tag === 'FormattedString';
		// 	}
		// }
	});

	return webpack.resolveConfig();
};

// 'ActionBar',
// 	'ActionItem',
// 	'FormattedString',
// 	'GridLayout',
// 	'HtmlView',
// 	'NavigationButton',
// 	'Page',
// 	'StackLayout',
// 	'AbsoluteLayout',
// 	'FlexboxLayout',
// 	'TabView',
// 	'TabViewItem',
// 	'TextField',
