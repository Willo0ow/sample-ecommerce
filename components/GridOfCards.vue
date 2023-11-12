<template>
  <section class="py-24 md:py-48 px-12 md:px-20" :class="backgroundColor">
    <div class="centered-max-width">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center md:mb-24"
      >
        <h2 class="text-6xl md:text-8xl">{{ section.title }}</h2>
        <span class="flex items-center mt-4 mb-20 md:mt-0 md:mb-0">
          <nuxt-link
            class="uppercase text-3xl md:text-4xl mr-4"
            :to="section.moreLink.path"
            >{{ section.moreLink.label }}</nuxt-link
          >
          <Icon name="ic:baseline-arrow-forward" size="24px" />
        </span>
      </div>

      <p>{{ section.description }}</p>
      <div
        class="grid gap-16 md:gap-24"
        :class="[
          section.numberOfColumns == 1 && 'md:grid-cols-1',
          section.numberOfColumns == 2 && 'md:grid-cols-2',
          section.numberOfColumns == 3 && 'md:grid-cols-2',
          section.numberOfColumns == 4 && 'md:grid-cols-2',
        ]"
      >
        <ImageCard
          v-for="item in section.projects.data"
          :key="item.id"
          :card="item.attributes"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { CommonGridOfCards } from "~/types/generated";
const props = defineProps<{
  section: CommonGridOfCards["attributes"];
}>();

const backgroundColor = computed(() => {
  return props.section.backgroundColor === "red"
    ? "bg-red-600"
    : "bg-zinc-800 text-white";
});
</script>
