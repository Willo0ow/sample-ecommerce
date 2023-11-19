<template>
  <section
    class="py-24 md:py-48 px-12 md:px-20 bg-zinc-800 text-white featured-items"
  >
    <div class="centered-max-width flex flex-col lg:flex-row gap-20">
      <div class="w-full lg:w-[45%]">
        <h2 class="uppercase font-light">{{ section.header }}</h2>
        <h3 class="text-6xl md:text-8xl pb-16">{{ section.title }}</h3>
        <p v-if="section.content">{{ section.content }}</p>
        <nuxt-link
          class="uppercase font-semibold text-3xl"
          v-if="section.ctaLink"
          to="/work"
          >{{ section.ctaLink.label }}</nuxt-link
        >
      </div>
      <Swiper
        :modules="[]"
        :slides-per-view="1.3"
        :space-between="30"
        :breakpoints="{
          420: {
            slidesPerView: 2.2,
          },
          640: {
            slidesPerView: 2.7,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }"
        :loop="true"
        :css-mode="true"
        class="max-w-[100%]"
      >
        <SwiperSlide v-for="item in section.projects.data" :key="item.id">
          <ImageCard
            :card="{
              title: item.attributes.title,
              description: item.attributes.description,
              imageUrl: item.attributes.imageUrl,
              imageAlt: item.attributes.imageAlt,
            }"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { CommonFeaturedItems } from "@/types/generated";
defineProps<{
  section: CommonFeaturedItems["attributes"];
}>();
</script>
<style scoped lang="scss">
.featured-items {
  .swiper-wrapper {
    align-items: start;
  }
}
</style>
