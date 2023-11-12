<template>
  <div class="text-center px-10 md:px-40">
    <p class="text-[2.8rem] md:text-[3.8rem] leading-[1.5] font-light">
      "{{ testimonial.description }}"
    </p>
    <p class="text-[2rem] mt-16">{{ testimonial.name }}</p>
    <p class="text-[2rem] mt-2 font-thin">{{ testimonial.position }}</p>
  </div>
</template>
<script setup lang="ts">
import type { ApiTestimonialTestimonial } from "~/types/generated";
defineProps<{
  testimonial: ApiTestimonialTestimonial["attributes"];
}>();
</script>
