<template>
  <main>
    <PageHero
      te-reo="Ko wai mātou · About us"
      title="Walking alongside Otago's multiples families"
      lead="Support, education and encouragement during your twin or triplet pregnancy — and long after your multiples are born."
    />

    <!-- History -->
    <section class="section history-section">
      <div class="wrap">
        <SectionHead
          eyebrow="Our story"
          title="More than fifty years of awhi"
          lead="From a small group of twin parents to a region-wide whānau — our purpose hasn't changed."
        />
        <div class="grid grid-3">
          <AppReveal v-for="(t, i) in timeline" :key="t.year" :delay="i * 90">
            <div class="card card-soft timeline-card">
              <span class="chip">{{ t.year }}</span>
              <h3 class="timeline-title">{{ t.title }}</h3>
              <p class="timeline-body">{{ t.body }}</p>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Expectants pack -->
    <section class="section section-tint pack-section">
      <AppKoru :size="380" :flip="true" :extra-style="{ bottom: '-130px', left: '-110px' }" />
      <div class="wrap section-wrap">
        <div class="hero-grid hero-grid-2">
          <div>
            <SectionHead
              eyebrow="For new & expectant parents"
              title="Your expectants pack"
              maxw="520px"
              lead="Every family expecting multiples is welcome to an expectants pack — a gentle armful of everything that helped us when we started."
            />
            <div class="pack-list">
              <AppReveal v-for="(p, i) in pack" :key="i" :delay="i * 50">
                <div class="pack-item">
                  <div class="bubble bubble-check"><AppIcon name="check" size="17" /></div>
                  <span>{{ p }}</span>
                </div>
              </AppReveal>
            </div>
            <AppReveal class="pack-cta">
              <NuxtLink to="/join" class="btn btn-primary btn-lg">
                Join to receive your pack <AppIcon name="arrow" />
              </NuxtLink>
              <p class="pack-cta-note">Included with every membership — even for families already expecting.</p>
            </AppReveal>
          </div>
          <AppReveal>
            <img src="/assets/expectants-pack.png" alt="A parent cradling newborn twins" class="section-img" />
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Care details -->
    <section class="section">
      <div class="wrap">
        <div class="grid grid-3">
          <AppReveal v-for="(c, i) in care" :key="c.title" :delay="i * 80">
            <div class="card care-card">
              <div :class="['bubble', c.tint]"><AppIcon :name="c.icon" /></div>
              <h3 class="care-title">{{ c.title }}</h3>
              <p class="care-body">{{ c.body }}</p>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Multiples NZ -->
    <section class="section section-sand">
      <div class="wrap wrap-narrow center">
        <div class="chip chip-spaced">
          <AppIcon name="shield" size="16" /> Part of something bigger
        </div>
        <h2>Affiliated to Multiples NZ</h2>
        <p class="lead mnz-lead">
          We're proudly affiliated to Multiples NZ, which represents 14 clubs nationwide and includes the
          Triplets Plus Club for families with triplets or more. Membership connects you to a whole country
          of families like yours.
        </p>
        <div class="mnz-actions">
          <NuxtLink to="/join" class="btn btn-primary">Become a member</NuxtLink>
          <a class="btn btn-ghost" href="http://www.multiples.org.nz" target="_blank" rel="noreferrer">
            Visit Multiples NZ <AppIcon name="external" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'About Multiples Otago | Twins & Triplets Club Since 1972',
  description: 'Over 50 years supporting twins and triplets families across Otago. Learn about our free expectants pack, morning teas, breastfeeding support, and nappy gift for new arrivals.',
  path: '/about',
})

const timeline = [
  { year: '1972',  title: 'Where it began',    body: 'Founded on 15 July as the Otago Parents of Twins Club — a few families finding strength in each other.' },
  { year: 'Later', title: 'Welcoming triplets', body: 'Renamed the Otago Multiple Birth Club when our first triplet family joined the fold.' },
  { year: '2016',  title: 'Multiples Otago',   body: 'Renamed again to Multiples Otago — the same heart, a name that holds every kind of multiple.' },
]

const pack = [
  'What Multiples Otago is and the support we provide',
  'Equipment for hire and library books to borrow',
  'Multiples NZ booklets on pregnancy, feeding & parenting',
  "The Multiples NZ 'Multiple Matters' magazine",
  'Government subsidies for multiple-birth families',
  'Local support services close to you',
]

const care = [
  { icon: 'heart', tint: 'rose', title: 'Feeding support',     body: 'A trained breastfeeding support counsellor is here for you, with real experience of neonatal journeys.' },
  { icon: 'cup',   tint: '',     title: 'Monthly morning teas', body: 'Afternoon-tea playgroups for new and expectant parents — a relaxed way to meet others who get it.' },
  { icon: 'gift',  tint: 'lav',  title: 'A gift on arrival',   body: 'Let us know when your babies are born and receive a free jumbo box of Huggies nappies.' },
]
</script>

<style scoped>
.history-section { padding-top: 20px; }

.timeline-card  { height: 100%; }
.timeline-card .chip { margin-bottom: 14px; }
.timeline-title { font-size: 1.3rem; }
.timeline-body  { color: var(--ink-2); margin-bottom: 0; }

.pack-section { overflow: hidden; }
.section-wrap { position: relative; z-index: 1; }

.pack-list { display: grid; gap: 12px; margin-bottom: 32px; }

.pack-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.pack-cta-note { color: var(--ink-3); font-size: .9rem; margin: 0; }

.pack-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.bubble-check {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex: none;
}

.care-card  { height: 100%; }
.care-title { margin-top: 18px; font-size: 1.25rem; }
.care-body  { color: var(--ink-2); margin-bottom: 0; }

.chip-spaced { margin-bottom: 18px; }

.mnz-lead {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.mnz-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 26px;
}
</style>
