<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    :width="size || undefined"
    :height="size || undefined"
    :class="['icon', size ? '' : 'icon-inherit']"
    aria-hidden="true"
    v-html="paths[name]"
  />
</template>

<script setup lang="ts">
defineProps<{ name: string; size?: string | number }>()

const paths: Record<string, string> = {
  heart:    '<path d="M12 20s-7-4.6-9.3-9C1.2 8 2.6 4.8 6 4.8c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.4 0 4.8 3.2 3.3 6.2C19 15.4 12 20 12 20Z"/>',
  tag:      '<g><path d="M3.5 11.6 11 4.1c.4-.4.9-.6 1.4-.6h5.1c.6 0 1 .4 1 1v5.1c0 .5-.2 1-.6 1.4l-7.5 7.5c-.8.8-2 .8-2.8 0l-3.6-3.6c-.8-.8-.8-2 0-2.8Z"/><circle cx="15" cy="9" r="1.4"/></g>',
  calendar: '<g><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M8 3.2v3.4M16 3.2v3.4"/></g>',
  people:   '<g><circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.4"/><path d="M3.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5M15 14c2.6 0 4.5 1.7 4.5 4.4"/></g>',
  lifebuoy: '<g><circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="3.2"/><path d="M6.3 6.3l3.4 3.4M14.3 14.3l3.4 3.4M17.7 6.3l-3.4 3.4M9.7 14.3l-3.4 3.4"/></g>',
  mail:     '<g><rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.4"/><path d="m4 7 8 6 8-6"/></g>',
  pin:      '<g><path d="M12 21s6.5-5.8 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.2 12 21 12 21Z"/><circle cx="12" cy="10.3" r="2.4"/></g>',
  chevron:  '<path d="m9 5 7 7-7 7"/>',
  arrow:    '<path d="M4 12h15m-6-7 7 7-7 7"/>',
  cup:      '<g><path d="M5 8h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z"/><path d="M16 9h2.5a2.5 2.5 0 0 1 0 5H16M7 3v1.5M10.5 3v1.5"/></g>',
  book:     '<g><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5V5.5Z"/><path d="M20 5.5C20 4.7 19.3 4 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5V5.5Z"/></g>',
  gift:     '<g><rect x="3.5" y="9" width="17" height="11.5" rx="2"/><path d="M3.5 13.5h17M12 9v11.5M12 9S10.5 4.5 8 4.5 5.5 8 8 9h4Zm0 0s1.5-4.5 4-4.5 2.5 3.5 0 4.5h-4Z"/></g>',
  baby:     '<g><circle cx="12" cy="6.5" r="2.8"/><path d="M6.5 13c1.5 1.6 3.4 2.5 5.5 2.5s4-.9 5.5-2.5M8 20l1.5-4M16 20l-1.5-4M9.5 16h5"/></g>',
  check:    '<path d="m5 12.5 4.5 4.5L19 7"/>',
  chat:     '<g><path d="M4 6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v7c0 1.4-1.1 2.5-2.5 2.5H10l-4.5 4v-4H6.5C5.1 16 4 14.9 4 13.5v-7Z"/></g>',
  facebook: '<path d="M14 8.5h2.2V5.4c-.4-.05-1.6-.16-3-.16-3 0-5 1.83-5 5.18v2.78H5.4v3.3h2.8V24h3.4v-7.5h2.7l.43-3.3h-3.13v-2.45c0-.95.26-1.6 1.6-1.6Z"/>',
  external: '<g><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V7.5A1.5 1.5 0 0 1 6 6h4.5"/></g>',
  shield:   '<g><path d="M12 3.5 19 6v6c0 4.3-3 7-7 8.5C8 19 5 16.3 5 12V6l7-2.5Z"/><path d="m9 12 2 2 4-4"/></g>',
  sparkle:  '<path d="M12 3c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6Z"/>',
  hand:     '<g><path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V11m0 0V4.5a1.5 1.5 0 0 1 3 0V11m0 0V6a1.5 1.5 0 0 1 3 0v7c0 3.6-2.4 7-6.5 7-2.3 0-3.6-.9-4.8-2.5l-2.3-3c-.8-1.1.5-2.6 1.8-2l1.9 1.3"/></g>',
}
</script>

<style scoped>
.icon         { display: inline-block; vertical-align: middle; flex: none; }
.icon-inherit { width: 1.1em; height: 1.1em; }
</style>
