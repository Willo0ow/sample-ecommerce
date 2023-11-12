<template>
  <section class="py-24 md:py-48 px-12 md:px-20">
    <div class="centered-max-width relative">
      <button
        class="prev-button absolute top-1/2 -left-16 transform -translate-y-1/2 h-full"
      >
        <Icon name="ic:sharp-arrow-left" size="48px" />
      </button>
      <button
        class="next-button absolute top-1/2 -right-16 transform -translate-y-1/2 h-full"
      >
        <Icon name="ic:sharp-arrow-right" size="48px" />
      </button>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :navigation="{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }"
      >
        <SwiperSlide v-for="item in section.items.data" :key="item.id">
          <SingleTestimonial :testimonial="item.attributes" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { CommonTestimonials } from "~/types/generated";
defineProps<{
  section: CommonTestimonials;
}>();
</script>
<style scoped lang="scss">
.swiper-button-next {
  display: none !important;
}
</style>
