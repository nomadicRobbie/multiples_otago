<template>
  <main>
    <!-- Hero -->
    <section class="hero-section">
      <!-- Horizontal logo watermark — right-anchored, same treatment as koru marks -->
      <img src="/assets/logo-horizontal.png" alt="" aria-hidden="true" class="koru-mark hero-logo-mark" />
      <div class="wrap hero-wrap">
        <div class="hero-grid hero-grid-2">
          <div>
            <div class="eyebrow"><span class="dot"></span>Haere mai · Welcome</div>
            <h1 class="hero-heading">A warm welcome to your multiples whānau</h1>
            <p class="lead hero-lead">
              Multiples Otago supports families expecting and parenting twins, triplets and higher-order multiples across the Otago region. We're a volunteer team of parents who've
              walked this road — here with friendship, advice and encouragement for the joys and the challenges.
            </p>
            <div class="hero-actions">
              <NuxtLink to="/join" class="btn btn-primary btn-lg"> Become a member <AppIcon name="arrow" /> </NuxtLink>
              <NuxtLink to="/about" class="btn btn-soft btn-lg"> <AppIcon name="baby" /> My multiples have arrived! </NuxtLink>
            </div>
            <p class="hero-note">New parents — let us know your pēpi have arrived and receive a free jumbo box of nappies.</p>
          </div>

          <AppReveal>
            <div class="hero-video-wrap">
              <video ref="heroVideo" src="/assets/hero.mp4" autoplay muted loop playsinline preload="auto" aria-label="Multiples Otago families" class="section-video" />
              <button class="video-pause-btn" :aria-label="heroPaused ? 'Play video' : 'Pause video'" @click="toggleHero">
                <span aria-hidden="true">{{ heroPaused ? "▶" : "⏸" }}</span>
              </button>
              <div class="card card-soft hero-badge">
                <div class="bubble rose bubble-sm"><AppIcon name="heart" size="22" /></div>
                <div class="hero-badge-text">
                  <strong>For parents,</strong>
                  <span>by parents — since 1972</span>
                </div>
              </div>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Support finder -->
    <section class="section section-tint support-section">
      <AppKoru :size="360" :flip="true" :extra-style="{ bottom: '-120px', left: '-120px' }" />
      <div class="wrap section-wrap">
        <SectionHead
          center
          eyebrow="We're here for you"
          title="Need a hand? Start here"
          lead="However you've arrived — pregnant with multiples, newly home, or somewhere in between — there's a place to begin." />
        <div class="grid grid-3">
          <AppReveal v-for="(s, i) in supportPaths" :key="s.title" :delay="i * 90">
            <div class="card support-card">
              <div :class="['bubble', s.tint]"><AppIcon :name="s.icon" /></div>
              <h3 class="card-title">{{ s.title }}</h3>
              <p class="card-body">{{ s.body }}</p>
              <NuxtLink :to="'/' + s.link" class="card-link-btn"> {{ s.cta }} <AppIcon name="chevron" size="16" /> </NuxtLink>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Who we are -->
    <section class="section">
      <div class="wrap">
        <div class="hero-grid hero-grid-rev">
          <AppReveal>
            <div class="who-video-wrap">
              <video ref="whoVideo" src="/assets/who-we-are.mp4" autoplay muted loop playsinline preload="auto" aria-label="Multiples Otago community" class="section-video-sm" />
              <button class="video-pause-btn" :aria-label="whoPaused ? 'Play video' : 'Pause video'" @click="toggleWho">
                <span aria-hidden="true">{{ whoPaused ? "▶" : "⏸" }}</span>
              </button>
            </div>
          </AppReveal>
          <div>
            <SectionHead eyebrow="Who we are" title="A community that just gets it" maxw="560px" />
            <p class="lead">
              The club is based in Dunedin and covers Dunedin, Wānaka, Balclutha and Oamaru. Throughout the year we run morning teas for new and expectant parents, playgroups, and
              social events — and our sub-branches host local get-togethers too.
            </p>
            <p class="who-secondary">
              Multiples Otago is independently run but affiliated to
              <a href="http://www.multiples.org.nz" target="_blank" rel="noreferrer">Multiples NZ</a>, the body representing 14 multiple-birth clubs nationwide.
            </p>
            <div class="who-actions">
              <NuxtLink to="/about" class="btn btn-ghost">Our story <AppIcon name="chevron" /></NuxtLink>
              <NuxtLink to="/events" class="btn btn-ghost">See what's on</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section section-sand">
      <div class="wrap">
        <SectionHead center eyebrow="Being a member" title="What you'll find with us" />
        <div class="grid grid-4">
          <AppReveal v-for="(f, i) in features" :key="f.title" :delay="i * 80">
            <div class="card card-soft center feature-card">
              <div :class="['bubble', f.tint]" class="feature-bubble"><AppIcon :name="f.icon" /></div>
              <h3 class="feature-title">{{ f.title }}</h3>
              <p class="feature-body">{{ f.body }}</p>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Join CTA -->
    <section class="section">
      <div class="wrap">
        <div class="join-cta-band">
          <AppKoru :size="420" :extra-style="{ right: '-130px', top: '-90px', opacity: '0.14', filter: 'brightness(0) invert(1)' }" />
          <div class="join-cta-inner">
            <h2 class="join-cta-heading">Join a whānau who understands</h2>
            <p class="join-cta-lead">Membership unlocks buddy support, playgroups, discounts, our newsletter, and a community of parents who've been exactly where you are.</p>
            <div class="join-cta-actions">
              <NuxtLink to="/join" class="btn btn-lg btn-white">Become a member</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-lg btn-white-ghost">Ask us anything</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

usePageSeo({
  title: "Multiples Otago — Twins & Triplets Support in Otago, NZ",
  description:
    "Multiples Otago supports families expecting and parenting twins, triplets and higher-order multiples across Dunedin and Otago. Playgroups, buddy support, events and more.",
  path: "/",
});

const heroVideo = ref<HTMLVideoElement | null>(null);
const whoVideo = ref<HTMLVideoElement | null>(null);
const heroPaused = ref(false);
const whoPaused = ref(false);

onMounted(() => {
  [heroVideo.value, whoVideo.value].forEach((v) => {
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  });
});

function toggleHero() {
  if (!heroVideo.value) return;
  if (heroVideo.value.paused) {
    heroVideo.value.play();
    heroPaused.value = false;
  } else {
    heroVideo.value.pause();
    heroPaused.value = true;
  }
}
function toggleWho() {
  if (!whoVideo.value) return;
  if (whoVideo.value.paused) {
    whoVideo.value.play();
    whoPaused.value = false;
  } else {
    whoVideo.value.pause();
    whoPaused.value = true;
  }
}

const supportPaths = [
  {
    icon: "cup",
    tint: "",
    title: "New & expectant parents",
    body: "Morning teas, an expectants pack, equipment hire and a friendly face before baby arrives.",
    link: "about",
    cta: "What's on offer",
  },
  {
    icon: "lifebuoy",
    tint: "rose",
    title: "Find support services",
    body: "A gentle directory of local and national help — feeding, wellbeing, premature babies and more.",
    link: "support",
    cta: "Browse support",
  },
  {
    icon: "people",
    tint: "lav",
    title: "Talk to a parent buddy",
    body: "Be matched with a family a little further along their multiples journey. You're not alone.",
    link: "contact",
    cta: "Reach out",
  },
];

const features = [
  { icon: "people", tint: "", title: "Buddies", body: "Partner with families a little further along their multiples journey for support." },
  { icon: "tag", tint: "rose", title: "Discounts", body: "Savings on a range of multiples essentials, locally and nationally." },
  { icon: "calendar", tint: "lav", title: "Events", body: "Gatherings throughout the year to keep you connected to our community." },
  { icon: "heart", tint: "", title: "Community", body: "A collection of people who simply get the multiples journey." },
];
</script>

<style scoped>
/* ── Hero ── */
.hero-section {
  padding-top: clamp(40px, 6vw, 84px);
  padding-bottom: clamp(32px, 5vw, 70px);
  overflow: hidden;
  position: relative;
}
.hero-wrap {
  position: relative;
  z-index: 1;
}

.hero-heading {
  margin-bottom: 18px;
}

.hero-lead {
  max-width: 540px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.hero-note {
  font-size: 0.9rem;
  color: var(--ink-3);
  margin-top: 18px;
  margin-bottom: 0;
}

.hero-video-wrap,
.who-video-wrap {
  position: relative;
}

/* Horizontal logo watermark — top-right corner, 25% of the hero section width.
   .koru-mark provides: position:absolute, opacity:var(--motif-opacity), z-index:0.
   hero-wrap sits at z-index:1 so all content renders above this. */
.hero-logo-mark {
  width: 35%;
  bottom: -30px;
  right: -130px;
  transform: rotate(20deg);
}
@media (max-width: 860px) {
  .hero-logo-mark {
    display: none;
  }
}

/* Video pause/play toggle — WCAG 2.2.2 */
.video-pause-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.82);
  color: var(--ink);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  backdrop-filter: blur(4px);
  transition:
    background 0.15s ease,
    transform 0.15s ease;
  z-index: 3;
}
.video-pause-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: scale(1.1);
}
.video-pause-btn:focus-visible {
  outline: 2px solid var(--accent-deep);
  outline-offset: 2px;
}

.hero-badge {
  position: absolute;
  left: -18px;
  bottom: -22px;
  z-index: 2;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: var(--r-md);
}
@media (max-width: 600px) {
  .hero-badge {
    display: none;
  }
}

.bubble-sm {
  width: 44px;
  height: 44px;
}

.hero-badge-text {
  line-height: 1.25;
  display: flex;
  flex-direction: column;
}
.hero-badge-text strong {
  font-family: var(--font-head);
}
.hero-badge-text span {
  color: var(--ink-2);
  font-size: 0.92rem;
}

/* ── Support cards ── */
.support-section {
  overflow: hidden;
  position: relative;
}
.section-wrap {
  position: relative;
  z-index: 1;
}

.support-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-title {
  margin-top: 20px;
}
.card-body {
  color: var(--ink-2);
  flex: 1;
}

.card-link-btn {
  align-self: flex-start;
  padding: 6px 0;
  color: var(--accent-deep);
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  border-radius: 4px;
  transition:
    color 0.15s ease,
    gap 0.15s ease;
}
.card-link-btn:hover {
  color: var(--accent-ink);
  gap: 8px;
}

/* ── Who we are ── */
.who-secondary {
  color: var(--ink-2);
}

.who-actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
  flex-wrap: wrap;
}

/* ── Features ── */
.feature-card {
  height: 100%;
  padding-top: 36px;
}
.feature-bubble {
  margin: 0 auto 18px;
}
.feature-title {
  font-size: 1.2rem;
}
.feature-body {
  color: var(--ink-2);
  margin-bottom: 0;
  font-size: 0.97rem;
}

/* ── Join CTA band ── */
.join-cta-band {
  background: var(--accent-deep);
  border-radius: var(--r-xl);
  padding: clamp(40px, 5vw, 72px) clamp(24px, 4vw, 64px);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.join-cta-inner {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}
.join-cta-heading {
  color: #fff;
}
.join-cta-lead {
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.1rem;
  margin-bottom: 28px;
}
.join-cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-white {
  background: #fff;
  color: var(--accent-ink);
  box-shadow: 0 4px 16px -6px rgba(0, 0, 0, 0.18);
}
.btn-white:hover {
  background: #f0f8fb;
  transform: translateY(-2px);
  color: var(--accent-ink);
}

.btn-white-ghost {
  background: transparent;
  color: #fff;
  box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.65);
}
.btn-white-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}
</style>
