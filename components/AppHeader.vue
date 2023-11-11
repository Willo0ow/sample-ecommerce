<template>
  <header
    class="sticky top-0 z-30 transition-colors duration-500 px-8"
    :class="{
      'bg-zinc-800 text-white': scrollHeight > 0,
      'bg-white text-black': scrollHeight === 0,
    }"
  >
    <nav
      class="centered-max-width"
      :class="[isMobileNavOpen ? 'h-[100vh]' : 'h-fit']"
    >
      <div
        class="flex items-center h-[--nav-height-mobile] lg:h-[--nav-height-desktop]"
      >
        <nuxt-link
          to="/"
          class="font-bold flex-none text-2xl md:text-3xl transition-all uppercase"
          @click="toggleMobileNav"
          >{{ !pending && content?.attributes.appName }}</nuxt-link
        >
        <div class="w-full grow text-end hidden md:inline-block">
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="uppercase font-medium mx-6 py-3 hover:text-red-600"
            active-class="border-b-2 border-red-600"
            >{{ link.label }}</nuxt-link
          >
        </div>
        <div class="inline-block md:hidden grow text-end">
          <Icon name="ic:baseline-menu" size="24px" @click="toggleMobileNav" />
        </div>
      </div>
      <div
        v-if="isMobileNavOpen"
        class="md:hidden flex flex-col justify-between"
      >
        <ul class="py-4 w-full text-end text-3xl border-t border-red-600">
          <li v-for="(link, index) in links" :key="index" class="mr-4 py-5">
            <nuxt-link
              :to="link.path"
              class="uppercase font-medium hover:text-red-600"
              active-class="border-b-2 border-red-600"
              @click="toggleMobileNav"
              >{{ link.label }}</nuxt-link
            >
          </li>
        </ul>
        <BaseButton class="w-full">Contact us</BaseButton>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import type { ApiAppHeaderAppHeader, BaseLink } from "@/types/generated";

const { content, pending } =
  await useSinglePageContent<ApiAppHeaderAppHeader>("app-header");

const links = computed(() => {
  return (
    (content.value?.attributes?.links as unknown as BaseLink["attributes"][]) ||
    []
  );
});
const { y: scrollHeight } = useWindowScroll();
const isMobileNavOpen = ref(false);
const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
  toggleScrollLock();
};
const toggleScrollLock = () => {
  document.body.style.overflow === "hidden"
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");
};
</script>
