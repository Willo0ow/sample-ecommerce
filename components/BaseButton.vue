<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="bg-red-600 text-white uppercase text-2xl px-7 py-5"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
const props = defineProps<{
  to?: string;
  href?: string;
  classes?: string;
}>();

const tag = computed(() => {
  if (props.to) {
    return defineNuxtLink({});
  }
  if (props.href) {
    return "a";
  }
  return "button";
});
</script>
