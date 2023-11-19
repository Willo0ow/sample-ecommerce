<template>
  <div v-if="content?.attributes">
    <HomeHero
      :title="content.attributes.heroTitle"
      :description="content.attributes.heroDescription"
      :image="content.attributes.heroImage"
    />
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
import TestimonialSlider from "~/components/TestimonialSlider.vue";
import Expandable from "~/components/Expandable.vue";
import PartnersSection from "~/components/PartnersSection.vue";
import { type ApiHomePageHomePage } from "@/types/generated";

const { content } = await useHomePageContent<ApiHomePageHomePage>();

const getSectionComponent = (strapiComponent: string) => {
  if (strapiComponent === "common.grid-of-cards") return GridOfCards;
  if (strapiComponent === "common.testimonials") return TestimonialSlider;
  if (strapiComponent === "common.expandable") return Expandable;
  if (strapiComponent === "common.partners-logos") return PartnersSection;
};
</script>
ń
