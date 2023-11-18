<template>
  <div v-html="$mdRenderer.render(content)"></div>
</template>
<script setup lang="ts">
import type { Attribute } from "@strapi/types";
defineProps<{
  content: Attribute.RichText;
}>();
</script>
