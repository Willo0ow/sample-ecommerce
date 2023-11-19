<template>
  <section class="py-24 md:py-48 px-12 md:px-20">
    <div class="centered-max-width">
      <h2 class="text-6xl md:text-8xl mb-12 md:mb-24">{{ section.title }}</h2>
      <div
        class="grid grid-cols-3 min-[420px]:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"
      >
        <img
          width="70"
          height="70"
          class="mx-auto"
          v-for="logo in section.logos.data"
          :src="getImageSrc(logo.attributes.url)"
          :key="logo.id"
          alt="text"
        />
      </div>
      <nuxt-link
        :to="section.bottomLink.path ||  section.bottomLink.route.data.attributes.path"
        class="block mt-12 md:mt-24 text-center uppercase font-semibold text-3xl"
        >{{ section.bottomLink.label }}</nuxt-link
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import type { CommonPartnersLogos } from "~/types/generated";
defineProps<{
  section: CommonPartnersLogos["attributes"];
}>();
const getImageSrc = (imageUrl: string) => {
  return "http://localhost:1337" + imageUrl;
};
</script>
<style>
.swiper-wrapper {
  align-items: center;
}
</style>
