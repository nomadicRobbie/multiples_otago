<template>
  <main>
    <PageHero
      te-reo="Ngā hui · What's on"
      title="Events & get-togethers"
      lead="Gatherings throughout the year — from quiet morning teas for expectant parents to our big Christmas party. Come as you are; bring the babies."
    />

    <section class="section events-section">
      <div class="wrap">
        <!-- Filter -->
        <div class="filter-bar" role="group" aria-label="Filter events by category">
          <button
            v-for="c in cats" :key="c"
            :class="['filter-btn', activeCat === c && 'filter-btn--active']"
            :aria-pressed="activeCat === c"
            @click="activeCat = c"
          >{{ c }}</button>
        </div>

        <div class="grid grid-2 events-grid">
          <AppReveal v-for="(e, i) in shown" :key="e.title" :delay="i * 60">
            <div class="card event-card">
              <div class="event-date">
                <div class="event-month">{{ e.m }}</div>
                <div class="event-day">{{ e.d }}</div>
              </div>
              <div class="event-body">
                <span :class="['chip', `chip--${e.tint || 'default'}`]">{{ e.cat }}</span>
                <h3 class="event-title">{{ e.title }}</h3>
                <div class="event-meta">
                  <span class="event-meta-item">
                    <AppIcon name="pin" size="15" />{{ e.where }}
                  </span>
                  <span class="event-meta-item">
                    <AppIcon name="calendar" size="15" />{{ e.time }}
                  </span>
                </div>
                <p class="event-desc">{{ e.body }}</p>
              </div>
            </div>
          </AppReveal>
        </div>

        <p class="events-footnote center">
          Dates shown are illustrative. Members receive exact dates by newsletter and in our Facebook group.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-tint cta-section">
      <AppKoru :size="360" :flip="true" :extra-style="{ bottom: '-120px', left: '-110px' }" />
      <div class="wrap wrap-narrow center cta-wrap">
        <h2>Never miss a get-together</h2>
        <p class="lead cta-lead">
          Members get event dates first, plus free or subsidised entry. Our Facebook group is where the
          day-to-day chatter and last-minute meet-ups happen.
        </p>
        <div class="cta-actions">
          <NuxtLink to="/join" class="btn btn-primary">Become a member</NuxtLink>
          <a class="btn btn-ghost" href="https://www.facebook.com/groups/1714542008762720/" target="_blank" rel="noreferrer">
            Join the Facebook group <AppIcon name="facebook" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

usePageSeo({
  title: 'Events & Playgroups for Twins & Triplets | Multiples Otago',
  description: 'Morning teas, playgroups, family days and social events for twins and triplets families across Otago. Members get first access and subsidised entry all year round.',
  path: '/events',
})

const cats = ['All', 'Morning teas', 'Playgroups', 'Family days', 'Social']
const activeCat = ref('All')

const events = [
  { m: 'JUN', d: '18', cat: 'Morning teas', tint: '',     title: 'Expectant & New Parents Morning Tea', where: 'Dunedin · Central', time: '10:00 – 11:30am', body: 'A relaxed cuppa for parents expecting multiples and those with babies under one. Bring bub — or just yourself.' },
  { m: 'JUL', d: '05', cat: 'Playgroups',   tint: 'lav',  title: 'Winter Playgroup',                   where: 'Dunedin',           time: '9:30 – 11:00am',  body: 'Warm indoor play, toys and tea while the tamariki tire themselves out. All ages welcome.' },
  { m: 'AUG', d: '16', cat: 'Family days',  tint: 'rose', title: 'Inflatable World',                   where: 'Dunedin',           time: 'Afternoon',        body: 'A club favourite — bouncing, sliding and burning energy. Subsidised entry for members.' },
  { m: 'SEP', d: '20', cat: 'Morning teas', tint: '',     title: 'Oamaru Morning Tea',                 where: 'North Otago',       time: '10:00 – 11:30am', body: 'Our North Otago coordinator hosts a friendly catch-up for local multiples families.' },
  { m: 'OCT', d: '—',  cat: 'Social',       tint: 'lav',  title: 'Multiples NZ National Conference',   where: 'Annual · nationwide', time: 'Early October',  body: 'Connect with multiples families from across Aotearoa. Open to all members.' },
  { m: 'APR', d: '06', cat: 'Family days',  tint: 'rose', title: 'Easter Picnic in the Park',          where: 'Dunedin',           time: '11:00am – 1:00pm', body: 'Picnic rugs, an egg hunt and plenty of laughter. One for the whole whānau.' },
  { m: 'DEC', d: '07', cat: 'Social',       tint: '',     title: 'Christmas Party',                    where: 'Dunedin',           time: 'Afternoon',        body: 'Our biggest celebration of the year — kai, a special guest, and gifts for the tamariki.' },
]

const shown = computed(() =>
  activeCat.value === 'All' ? events : events.filter(e => e.cat === activeCat.value)
)
</script>

<style scoped>
.events-section { padding-top: 8px; }

/* Filter */
.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.filter-btn {
  font-family: var(--font-head);
  font-weight: 600;
  font-size: .92rem;
  padding: 9px 18px;
  border-radius: var(--r-pill);
  border: none;
  cursor: pointer;
  min-height: 44px;
  background: var(--accent-mist);
  color: var(--accent-ink);
  transition: background .15s ease, color .15s ease;
}
.filter-btn--active { background: var(--accent-deep); color: #fff; }
.filter-btn:hover:not(.filter-btn--active) { background: var(--accent-pale); }

/* Events */
.events-grid { gap: 20px; }

.event-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  height: 100%;
}

.event-date {
  flex: none;
  text-align: center;
  border-radius: var(--r-md);
  overflow: hidden;
  width: 72px;
  box-shadow: var(--shadow-sm);
}
.event-month {
  background: var(--accent-deep);
  color: #fff;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: .8rem;
  letter-spacing: .08em;
  padding: 6px 0;
}
.event-day {
  background: #fff;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1.7rem;
  color: var(--ink);
  padding: 6px 0;
}

.event-body   { min-width: 0; }
.event-title  { font-size: 1.2rem; margin: 4px 0 8px; }
.event-desc   { color: var(--ink-2); margin-bottom: 0; font-size: .96rem; }

.event-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: var(--ink-3);
  font-size: .88rem;
  margin-bottom: 10px;
}
.event-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* Chip tint variants */
.chip--default { background: var(--accent-pale); color: var(--accent-ink); }
.chip--rose    { background: var(--rose); color: var(--rose-deep); }
.chip--lav     { background: var(--lavender); color: var(--lavender-deep); }

.chip { margin-bottom: 8px; }

.events-footnote { color: var(--ink-3); font-size: .88rem; margin-top: 28px; }

/* CTA */
.cta-section  { overflow: hidden; }
.cta-wrap     { position: relative; z-index: 1; }
.cta-lead     { max-width: 560px; margin-left: auto; margin-right: auto; }
.cta-actions  { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
</style>
