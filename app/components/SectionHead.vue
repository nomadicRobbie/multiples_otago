<template>
  <div :class="['section-head', center && 'section-head--center']" :style="maxw ? { maxWidth: maxw } : {}">
    <div v-if="eyebrow" class="eyebrow" ><span class="dot"></span>{{ eyebrow }}</div>
    <h2>{{ title }}</h2>
    <p v-if="lead" class="lead">{{ lead }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  lead?: string
  center?: boolean
  maxw?: string
}>()
</script>

<style scoped>
.section-head {
  max-width: 760px;
  margin-bottom: 44px;
}
.section-head--center {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.section-head--center .eyebrow {
  justify-content: center;
}
.lead {
  margin-bottom: 0;
}
</style>
