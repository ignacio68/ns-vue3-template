<script setup lang="ts">
import { computed } from 'nativescript-vue';

const props = defineProps({
	loading: {
		type: Boolean,
		required: true,
	},
	bg: {
		type: Boolean,
	},
	fullScreen: {
		type: Boolean,
	},
	size: {
		type: String,
		default: '50',
	},
	primary: {
		type: Boolean,
		default: true,
	},
	white: {
		type: Boolean,
		required: true,
	},
	black: {
		type: Boolean,
		required: true,
	},
});

const color = computed(() =>
	props.white ? 'text-white' : props.black ? 'text-dark' : '',
);
</script>
<template>
	<FlexboxLayout
		justifyContent="center"
		alignItems="center"
		:class="{ 'full-screen': fullScreen, bg: bg }"
	>
		<ActivityIndicator
			:busy="loading"
			:width="size"
			:height="size"
			:class="[color]"
		></ActivityIndicator>
	</FlexboxLayout>
</template>
<style scoped lang="scss">
.full-screen {
	height: 100%;
	width: 100%;
}
</style>
