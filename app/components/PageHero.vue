<template>
  <section class="page-hero">
    <AppKoru :size="420" :extra-style="{ top: '-110px', right: '-120px' }" />
    <div class="wrap hero-inner">
      <div class="hero-content">
        <div v-if="teReo" class="eyebrow"><span class="dot"></span>{{ teReo }}</div>
        <h1>{{ title }}</h1>
        <p v-if="lead" class="lead hero-lead">{{ lead }}</p>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ teReo?: string; title: string; lead?: string }>()
</script>

<style scoped>
.page-hero {
  padding-top: clamp(40px, 5vw, 68px);
  padding-bottom: clamp(28px, 3vw, 40px);
  overflow: hidden;
  position: relative;
}
.hero-inner {
  position: relative;
  z-index: 1;
}
.hero-content {
  max-width: 760px;
}
.hero-lead {
  max-width: 640px;
}
</style>
