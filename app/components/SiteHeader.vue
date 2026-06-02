<template>
  <header class="site-header">
    <div class="announce" role="status" aria-live="polite">
      Expecting or just welcomed your multiples?&nbsp;
      <NuxtLink to="/support">We're here to help&nbsp;→</NuxtLink>
    </div>

    <div class="nav-shell" :class="{ 'nav-shell--scrolled': scrolled }">
      <div class="wrap">
        <nav class="nav" aria-label="Main navigation">
          <NuxtLink to="/" class="nav-logo" aria-label="Multiples Otago — home">
            <img src="/assets/logo-badge-nav.png" alt="" class="nav-logo-img" />
          </NuxtLink>

          <div class="nav-links">
            <NuxtLink
              v-for="[path, label] in NAV" :key="path"
              :to="path"
              class="nav-link"
              :class="{ active: isActive(path) }"
              :aria-current="isActive(path) ? 'page' : undefined"
            >{{ label }}</NuxtLink>
            <NuxtLink to="/join" class="btn btn-primary nav-cta">Become a member</NuxtLink>
          </div>

          <button
            class="nav-burger"
            :aria-label="open ? 'Close menu' : 'Open menu'"
            :aria-expanded="open"
            aria-controls="mobile-nav"
            @click="toggleMenu"
          >
            <span :class="{ 'bar-top-open': open }"></span>
            <span :class="{ 'bar-mid-open': open }"></span>
            <span :class="{ 'bar-bot-open': open }"></span>
          </button>
        </nav>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div v-if="open" id="mobile-nav" ref="menuRef" class="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <div class="mobile-brand">
          <img src="/assets/logo-horizontal.png" alt="Multiples Otago" class="mobile-brand-logo" />
        </div>
        <NuxtLink
          v-for="[path, label] in NAV" :key="path"
          :to="path"
          class="nav-link"
          :class="{ active: isActive(path) }"
          :aria-current="isActive(path) ? 'page' : undefined"
          @click="open = false"
        >{{ label }}</NuxtLink>
        <NuxtLink to="/join" class="btn btn-primary" @click="open = false">Become a member</NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route    = useRoute()
const open     = ref(false)
const menuRef  = ref<HTMLElement | null>(null)
const scrolled = ref(false)

function onScroll() { scrolled.value = window.scrollY > 24 }
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(() => route.path, () => { open.value = false })

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    menuRef.value?.querySelector<HTMLElement>('a, button')?.focus()
  }
})

function toggleMenu() { open.value = !open.value }

const NAV: [string, string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/join', 'Join'],
  ['/events', 'Events'],
  ['/support', 'Support'],
  ['/contact', 'Contact'],
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
/* Nav shell — transparent at page top, gains background on scroll */
.nav-shell {
  border-bottom: 1px solid transparent;
  transition: background .25s ease, border-color .25s ease;
}
@media (prefers-reduced-motion: reduce) {
  .nav-shell { transition: none; }
}
.nav-shell--scrolled {
  background: rgba(251, 252, 252, .92);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  border-bottom-color: var(--hairline-soft);
}

/* Badge logo — shown at natural proportions, no cropping */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: none;
}
.nav-logo-img {
  height: 70px;
  width: auto;
  display: block;
  transition: transform .2s ease;
}
.nav-logo:hover .nav-logo-img {
  transform: scale(1.04);
}

/* Mobile menu brand header */
.mobile-brand {
  padding: 22px 20px 18px;
  border-bottom: 1px solid var(--hairline-soft);
  margin-bottom: 6px;
}
.mobile-brand-logo {
  height: 48px;
  width: auto;
  display: block;
}

/* Burger transforms */
.bar-top-open { transform: translateY(6px) rotate(45deg); }
.bar-mid-open { opacity: 0; transform: scaleX(0); }
.bar-bot-open { transform: translateY(-6px) rotate(-45deg); }

/* Mobile menu slide */
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity .2s ease, transform .2s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
