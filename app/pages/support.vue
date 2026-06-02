<template>
  <main>
    <PageHero
      te-reo="Āwhina · Support"
      title="Find the right support, gently"
      lead="A hand-picked directory of local and national help — organised by what you might be looking for. Tap any service to visit them directly."
    />

    <!-- Reassurance banner -->
    <section class="section section-flush">
      <div class="wrap">
        <div class="card helpline-card">
          <div class="bubble helpline-bubble"><AppIcon name="chat" /></div>
          <div class="helpline-text">
            <h3 class="helpline-title">Need to talk to someone today?</h3>
            <p class="helpline-body">Parent Help runs a free, confidential helpline every day, 9am–11pm. And our own parent buddies are only a message away.</p>
          </div>
          <div class="helpline-actions">
            <a class="btn btn-white" href="http://www.parenthelp.org.nz/" target="_blank" rel="noreferrer">Parent Help</a>
            <NuxtLink to="/contact" class="btn btn-white-ghost">Message us</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Government assistance -->
    <section class="section section-flush-top">
      <div class="wrap">
        <div class="grid grid-2 assist-grid">
          <AppReveal>
            <div class="card assist-card">
              <div class="chip chip-spaced"><AppIcon name="shield" size="15" /> Financial support</div>
              <h3>Work and Income — Home Help</h3>
              <p class="body-text">
                Multiple Birth Home Help payments can give you a hand at home. It's <b>not means-tested for triplets</b>;
                for twins, you'll need another child under five. Other assistance may be available depending on your income.
              </p>
              <a class="btn btn-soft btn-top" href="http://www.multiples.org.nz" target="_blank" rel="noreferrer">
                Read the details on Multiples NZ <AppIcon name="external" />
              </a>
            </div>
          </AppReveal>
          <AppReveal :delay="100">
            <div class="card card-soft assist-card assist-card--tint">
              <div class="bubble lav"><AppIcon name="gift" /></div>
              <h3 class="gift-title">A welcome gift from us</h3>
              <p class="body-text">
                When your babies arrive, let the club know within five weeks and we'll send a free jumbo box of
                Huggies nappies — one of the little perks of being part of the whānau.
              </p>
              <NuxtLink to="/about" class="btn btn-soft btn-top">How membership helps <AppIcon name="chevron" /></NuxtLink>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Directory groups -->
    <section
      v-for="(g, gi) in groups" :key="g.key"
      :class="['section', 'dir-section', gi % 2 === 0 && 'section-tint']"
    >
      <AppKoru
        v-if="gi % 2 === 0"
        :size="300"
        :flip="gi % 4 === 0"
        :extra-style="{ bottom: '-100px', [gi % 4 === 0 ? 'left' : 'right']: '-90px', [gi % 4 === 0 ? 'right' : 'left']: 'auto' }"
      />
      <div class="wrap dir-wrap">
        <div class="dir-heading">
          <div :class="['bubble', g.tint]"><AppIcon :name="g.icon" /></div>
          <div>
            <h2 class="dir-title">{{ g.key }}</h2>
            <p class="dir-blurb">{{ g.blurb }}</p>
          </div>
        </div>
        <div class="grid grid-3">
          <AppReveal v-for="(item, i) in g.items" :key="item.name" :delay="i * 70">
            <component
              :is="item.url ? 'a' : 'div'"
              v-bind="item.url ? { href: item.url, target: '_blank', rel: 'noreferrer' } : {}"
              class="support-link"
            >
              <div class="card card-soft service-card">
                <div class="service-text">
                  <strong class="service-name">{{ item.name }}</strong>
                  <span class="service-desc">{{ item.desc }}</span>
                </div>
                <AppIcon v-if="item.url" name="external" size="20" class="service-icon" />
                <span v-else class="chip">Ask us</span>
              </div>
            </component>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="section center">
      <div class="wrap wrap-narrow">
        <h2>Can't find what you need?</h2>
        <p class="lead closing-lead">
          Tell us what's going on and we'll point you in the right direction — or simply walk alongside you while you
          figure it out. There's no wrong question.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg closing-btn">Get in touch <AppIcon name="arrow" /></NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Support for Twins & Triplets Families in Otago | Multiples Otago',
  description: 'A gentle directory of local and national support — breastfeeding help, practical home support, neonatal care, parental wellbeing, and grief support for Otago families.',
  path: '/support',
})

const groups = [
  {
    key: 'Feeding & breastfeeding', icon: 'heart', tint: '',
    blurb: 'Feeding multiples is its own adventure. These people specialise in it.',
    items: [
      { name: 'Breastfeeding Support (BOS)', desc: 'Peer supporters, lactation consultants and support groups.', url: 'http://breastfeedingsos.co.nz/' },
      { name: 'The Breast Room',             desc: 'Free drop-in breastfeeding clinic plus antenatal classes.', url: 'https://www.facebook.com/TheBreastRoom' },
      { name: 'Charlotte Jean',              desc: 'Community lactation consultants in Central Otago.',         url: 'http://www.charlottejean.co.nz/communityservices.php' },
    ],
  },
  {
    key: 'Practical help at home', icon: 'gift', tint: 'rose',
    blurb: 'Meals, clothing and equipment when your hands are full.',
    items: [
      { name: 'Pregnancy Help', desc: 'Free maternity clothing, baby clothing and equipment.', url: 'http://www.pregnancyhelp.org.nz/dunedin/19/' },
      { name: 'Bellyful',       desc: 'Meals for families with newborns who are struggling with illness.', url: 'http://bellyful.org.nz/' },
    ],
  },
  {
    key: 'Premature & neonatal', icon: 'baby', tint: 'lav',
    blurb: 'For families whose journey includes time in special care.',
    items: [
      { name: 'Early Buds',        desc: 'Support for families with premature babies.',                        url: 'http://www.earlybuds.org.nz/useful-info.html' },
      { name: 'The Neonatal Trust', desc: 'Support for families of premature or sick babies — Otago region.', url: 'https://www.neonataltrust.org.nz/regions/otago' },
    ],
  },
  {
    key: 'Wellbeing & a listening ear', icon: 'chat', tint: '',
    blurb: "Your wellbeing matters just as much as your babies'.",
    items: [
      { name: 'Parent Help',     desc: 'Free helpline, 9am–11pm, 7 days a week.',                  url: 'http://www.parenthelp.org.nz/' },
      { name: 'Mothers Helpers', desc: 'Support for post-natal depression.',                        url: 'http://mothershelpers.co.nz/' },
      { name: 'Innov8 Smokefree', desc: 'Smokefree support for pregnant women and families.',       url: '' },
    ],
  },
  {
    key: 'Grief & loss', icon: 'hand', tint: 'rose',
    blurb: 'If you are grieving, you do not have to carry it alone. Take all the time you need.',
    items: [
      { name: 'Twin Loss', desc: 'Support for the loss of one or more multiple.',                url: 'https://www.facebook.com/groups/177861214875/' },
      { name: 'Sands',     desc: 'Support for the death of a baby during pregnancy or infancy.', url: 'http://www.sands.org.nz/' },
    ],
  },
]
</script>

<style scoped>
/* ── Helpline banner ── */
.section-flush     { padding-top: 8px; }
.section-flush-top { padding-top: 0; }

.helpline-card {
  background: var(--accent-deep);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 26px 32px;
}
.helpline-bubble { background: rgba(255, 255, 255, .18); color: #fff; }
.helpline-text   { flex: 1; min-width: 0; }
.helpline-title  { color: #fff; margin-bottom: 4px; }
.helpline-body   { color: rgba(255, 255, 255, .92); margin-bottom: 0; }
.helpline-actions { display: flex; gap: 10px; flex-wrap: wrap; }

.btn-white       { background: #fff; color: var(--accent-ink); }
.btn-white:hover { background: #f0f8fb; transform: translateY(-2px); color: var(--accent-ink); }

.btn-white-ghost       { background: transparent; color: #fff; box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, .6); }
.btn-white-ghost:hover { background: rgba(255, 255, 255, .1); transform: translateY(-2px); }

/* ── Assistance cards ── */
.assist-grid    { gap: 24px; align-items: stretch; }
.assist-card    { height: 100%; }
.assist-card--tint { background: var(--accent-mist); }
.chip-spaced    { margin-bottom: 14px; }
.body-text      { color: var(--ink-2); }
.btn-top        { margin-top: 4px; }
.gift-title     { margin-top: 16px; }

/* ── Directory ── */
.dir-section  { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); overflow: hidden; }
.dir-wrap     { position: relative; z-index: 1; }

.dir-heading {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
}
.dir-title  { font-size: clamp(1.4rem, 2.4vw, 1.9rem); margin-bottom: 2px; }
.dir-blurb  { color: var(--ink-2); margin-bottom: 0; }

.service-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  height: 100%;
}
.service-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.service-name { font-family: var(--font-head); font-weight: 700; }
.service-desc { color: var(--ink-2); font-size: .92rem; }
.service-icon { color: var(--accent-deep); flex: none; }

/* ── Closing ── */
.closing-lead { max-width: 560px; margin-left: auto; margin-right: auto; }
.closing-btn  { margin-top: 22px; }
</style>
