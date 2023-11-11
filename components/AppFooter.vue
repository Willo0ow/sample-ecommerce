<template>
  <footer class="md:sticky bottom-0 w-full grid grid-cols-1 md:grid-cols-2">
    <FooterCta
      class="bg-red-600"
      side="left"
      :attributes="content?.attributes?.leftCta"
    />
    <FooterCta
      class="bg-zinc-800"
      side="right"
      :attributes="content?.attributes?.rightCta"
    />
    <div
      class="bg-zinc-800 md:bg-red-600 border-t md:border-t-0 text-white pt-8 md:py-8 px-8 md:pl-16 md:pr-0"
    >
      <div class="centered-left-half-max-width">
        {{ content?.attributes.copyright }}
      </div>
    </div>
    <div class="bg-zinc-800 text-white pb-8 md:py-8 px-8 md:pr-16 md:pl-0">
      <div class="centered-right-half-max-width md:pl-16">
        <p class="font-light">
          <nuxt-link
            v-for="(link, index) in content?.attributes.links"
            :key="index"
            :to="link.path"
            class="mx-4"
            >{{ link.label }}</nuxt-link
          >
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import type { ApiAppFooterAppFooter, CommonCta } from "@/types/generated";

const { content, pending } =
  await useAppFooterContent<ApiAppFooterAppFooter>("app-footer");
</script>
