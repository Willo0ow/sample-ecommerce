<template>
  <div
    v-if="attributes?.title"
    class="text-white min-h-[30rem] md:min-h-[60rem] flex items-center"
    :class="[side === 'right' ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16']"
  >
    <div
      :class="[
        side === 'right'
          ? 'centered-right-half-max-width pl-8 md:pl-16'
          : 'centered-left-half-max-width pr-8 md:pr-16',
      ]"
    >
      <h2 class="text-4xl md:text-5xl inline font-medium">
        {{ attributes.title }}
      </h2>
      <hr class="inline-block ml-3 mr-2 w-[6rem] h-[1px]" />
      <p class="inline text-4xl md:text-5xl font-light">
        {{ attributes.desscription }}
      </p>
      <div class="flex items-center gap-2 mt-16">
        <nuxt-link
          :to="attributes.ctaLink.path"
          class="uppercase font-semibold text-3xl"
          >{{ attributes.ctaLink.label }}</nuxt-link
        >
        <Icon name="ic:baseline-arrow-forward" size="24px" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CommonCta } from "~/types/generated";
defineProps<{
  side: "left" | "right";
  attributes: CommonCta["attributes"];
}>();
</script>
