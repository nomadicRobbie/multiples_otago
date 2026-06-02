<template>
  <div ref="el" :class="['reveal', seen ? 'in' : '']" :style="{ transitionDelay: delay + 'ms' }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)
const seen = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { seen.value = true; io?.disconnect() }
    })
  }, { threshold: 0.12 })
  io.observe(el.value)
})
onUnmounted(() => io?.disconnect())
</script>
