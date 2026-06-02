<template>
  <img
    src="/assets/koru-watermark.png"
    alt=""
    aria-hidden="true"
    class="koru-mark"
    :style="[
      { width: size + 'px', transform: flip ? 'scaleX(-1)' : 'none' },
      extraStyle,
    ]"
  />
</template>

<script setup lang="ts">
interface Props {
  size?: number
  flip?: boolean
  extraStyle?: Record<string, string>
}
withDefaults(defineProps<Props>(), { size: 320, flip: false })
</script>

<style scoped>
/* Cap koru size on mobile — overrides inline width via max-width */
@media (max-width: 860px) { .koru-mark { max-width: 240px; } }
@media (max-width: 480px) { .koru-mark { max-width: 160px; } }
</style>
