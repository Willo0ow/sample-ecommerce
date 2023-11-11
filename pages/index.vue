<template>
  <div v-if="content?.attributes">
    <component
      :is="getSectionComponent(section.__component)"
      v-for="section in content?.attributes?.sections"
      :key="section.id"
      :section="section"
    />
  </div>
</template>
<script setup lang="ts">
import GridOfCards from "@/components/GridOfCards.vue";
import { type ApiHomePageHomePage } from "@/types/generated";
const { content } = await useHomePageContent<ApiHomePageHomePage>("home-page");

const getSectionComponent = (strapiComponent: string) => {
  console.log(strapiComponent);

  // if (strapiComponent === "common.grid-of-cards")
  return GridOfCards;
};
</script>
ń
