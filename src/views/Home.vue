<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'nativescript-vue';
import { useRouter } from 'router-vue-native';
import { localize } from '@nativescript/localize';

// import NSButton from '@/components/NSButton.vue';

const router = useRouter();

const counter = ref(0);
const message = computed(() => {
	return `Blank {N}-Vue app: ${counter.value}`;
});

function logMessage() {
	console.log(localize('home.log-message'));
}

let interval: unknown;

onMounted(() => {
	console.log('mounted');
	interval = setInterval(() => counter.value++, 100);
});

const navigateToDetails = () => {
	router.push('/details', { clearHistory: true });
};

onUnmounted(() => {
	console.log('unmounted');
	clearInterval(interval);
});
</script>

<template>
	<Page>
		<ActionBar>
			<Label text="Home" class="text-lg font-bold" />
		</ActionBar>
		<GridLayout rows="*, auto, auto, *" class="px-4">
			<Label
				row="1"
				class="text-center align-middle text-xl text-gray-500"
				:text="message"
				@tap="logMessage"
			/>
			<!-- <NSButton
				row="2"
				bgClass="bg-primary"
				px="12"
				py="10"
				fontSize="15"
				@tap="logMessage"
				text="View Details"
			></NSButton> -->
			<Button
				row="2"
				class="mt-4 rounded-lg border-2 border-blue-400 bg-white px-4 py-2"
				horizontalAlignment="center"
				@tap="navigateToDetails"
			>
				View Details
			</Button>
		</GridLayout>
	</Page>
</template>

<style></style>
