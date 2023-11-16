<script lang="ts" setup>
import { ref } from 'nativescript-vue';
import { useRouter } from 'router-vue-native';

const router = useRouter()

const items = ref(
  Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`),
);

const navigateToHome = () => {
  router.push('/home', { clearHistory: true });
}
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, *">
      <Label
        text="Go Back"
        @tap="navigateToHome"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />

      <ContentView row="1" class="bg-[#65adf1] rounded-t-3xl">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item }">
            <GridLayout columns="*, auto" class="px-4">
              <Label :text="item" class="text-3xl py-3 text-white" />
              <ContentView col="1" class="w-5 h-5 rounded-full bg-white" />
            </GridLayout>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>
