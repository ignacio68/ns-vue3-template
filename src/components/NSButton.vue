<script setup lang="ts">
import { computed } from 'nativescript-vue';
import Loading from './Loading.vue';

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	loading: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
	},
	height: {
		type: String,
		default: '48',
	},
	width: {
		type: String,
		default: '100%',
	},
	fontSize: {
		type: String,
		default: '18',
	},
	primary: {
		type: Boolean,
	},
	textColorClass: {
		type: String,
		default: 'text-white',
	},
	px: {
		type: String,
		default: '0',
	},
	py: {
		type: String,
		default: '0',
	},
	loadingWhite: {
		type: Boolean,
	},
	loadingBlack: {
		type: Boolean,
	},
});

const background = computed(() => (props.primary ? 'bg-primary' : ''));
</script>
<template>
	<AbsoluteLayout id="ns-button" @tap="!disabled ? $emit('tap') : ''">
		<FlexboxLayout
			:disabled="disabled"
			:class="[background]"
			style="border-radius: 50; justify-content: center; align-items: center"
			:style="{
				'padding-left': px,
				'padding-right': px,
				'padding-top': py,
				'padding-bottom': py,
			}"
			:height="height"
			:width="width"
			justifyContent="center"
			alignItems="center"
		>
			<Label
				v-if="!loading"
				:text="text"
				:style="{ 'font-size': fontSize }"
				:class="[textColorClass]"
			></Label>
			<Loading
				v-else
				:loading="loading"
				size="30"
				:white="loadingWhite"
				:black="loadingBlack"
			>
			</Loading>
		</FlexboxLayout>
	</AbsoluteLayout>
</template>
