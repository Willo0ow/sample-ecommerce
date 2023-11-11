<template>
  <h1 class="h-[1000px]">{{ content?.attributes.test }}</h1>
</template>
<script setup lang="ts">
import { type ApiHomePageHomePage } from "@/types/generated";
const { content } =
  await useSinglePageContent<ApiHomePageHomePage>("home-page");
</script>
