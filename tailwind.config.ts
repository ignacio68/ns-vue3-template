import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/components/**/*.{vue,ts,tsx}',
		'./src/views**/*.{vue,ts,tsx}',
	],
	// use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
	darkMode: ['class', '.ns-dark'],
	theme: {
		extend: {},
	},
	plugins: [
		// plugin(function ({ addVariant }) {
		//   addVariant("android", ".ns-android &");
		//   addVariant("ios", ".ns-ios &");
		// }),
	],
	corePlugins: {
		preflight: false, // disables browser-specific resets
	},
} satisfies Config;
