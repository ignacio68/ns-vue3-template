import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.ignacio68.nsvue3template',
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
} as NativeScriptConfig;
