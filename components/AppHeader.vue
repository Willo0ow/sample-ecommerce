<template>
  <header class="app-header">
    <h1 class="app-header__title">My App</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.app-header {
  background-color: #333;
  &__title {
    margin: 20px;
  }
}
</style>
