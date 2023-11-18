<template>
  <section class="bg-black text-white py-24 md:py-48 px-12 md:px-20">
    <div class="centered-max-width flex flex-col md:flex-row">
      <h2 class="text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-0">
        {{ section.title }}
      </h2>
      <div class="grow md:pl-12 lg:pl-24">
        <div
          v-for="item in section.items"
          :key="item.id"
          class="border-b border-white py-12 md:py-24 last:pb-0 md:last:pb-0 md:first:pt-0 first:pt-0 last:border-b-0"
        >
          <div class="flex justify-between">
            <h3
              class="cursor-pointer text-6xl md:text-8xl"
              @click="switchTab(item.id)"
            >
              {{ item.title }}
            </h3>
            <nuxt-link
              class="uppercase text-3xl md:text-4xl mr-4"
              :to="item.linksTo.data.attributes.path"
            >
              <Icon name="ic:baseline-arrow-forward" size="32px" />
            </nuxt-link>
          </div>

          <MarkdownContent
            v-if="expandedTabId === item.id"
            class="pt-12"
            :content="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { CommonExpandable } from "~/types/generated";
defineProps<{
  section: CommonExpandable;
}>();
const expandedTabId = ref<number | null>(null);
const switchTab = (id: number) => {
  if (expandedTabId.value === id) {
    expandedTabId.value = null;
  } else {
    expandedTabId.value = id;
  }
};
</script>
