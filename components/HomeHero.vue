<template>
  <section class="py-24 md:py-48 px-12 md:px-20">
    <div class="centered-max-width grid md:grid-cols-2 hero">
      <img
        :src="image.url"
        :alt="image.altText"
        class="aspect-square object-cover w-full md:w-[100%] hero__image"
      />
      <div class="hero__title flex items-end">
        <h1
          class="text-[5rem] md:text-[10rem] lg:text-[15rem] leading-[1] md:mb-10 pt-32 md:pt-0 text-slate-50 mix-blend-difference"
        >
          {{ title }}
        </h1>
      </div>

      <p
        class="text-[3rem] leading-[1.3] md:text-[4.2rem] pt-24 leading-[1] font-light md:max-w-[70%] text-right ml-auto hero__description"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { BaseImage } from "~/types/generated";
defineProps<{
  title: string;
  description: string;
  image: BaseImage["attributes"];
}>();
</script>
<style scoped lang="scss">
.hero {
  grid-template-areas: "image" "title" "description";
  @screen md {
    grid-template-areas: "title image" "description description";
  }
  &__image {
    grid-area: image;
  }
  &__title {
    grid-area: title;
  }
  &__description {
    grid-area: description;
  }
}
</style>
