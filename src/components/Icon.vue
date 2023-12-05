<script lang="ts" setup>
const props = defineProps({
	icon: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<Label :text="props.icon" class="m-icon-round text-center"></Label>
</template>
