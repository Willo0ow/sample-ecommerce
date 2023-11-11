<template>
  <div>
    <img
      :src="card.image"
      :alt="card.imageAlt"
      class="mb-12 aspect-[16/12] object-cover"
    />
    <h2 class="text-4xl md:text-5xl inline font-medium">
      {{ card.title }}
    </h2>
    <hr class="inline-block ml-3 mr-2 w-[6rem] h-[2px] text-black" />
    <p class="inline text-4xl md:text-5xl font-light">
      {{ card.description }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { BaseCard } from "~/types/generated";
defineProps<{
  card: BaseCard["attributes"];
}>();
</script>
