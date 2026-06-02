<template>
  <main>
    <PageHero
      te-reo="Hono mai · Join us"
      title="Become a member"
      lead="Join the Otago Multiple Birth Club for support, friendship, discounts, playgroups and events — for families with twins, triplets and more."
    />

    <!-- Tiers -->
    <section class="section tiers-section">
      <div class="wrap">
        <div class="grid grid-3 tiers-grid">
          <AppReveal v-for="(t, i) in tiers" :key="t.note" :delay="i * 90">
            <div :class="['card', 'tier-card', t.featured && 'tier-card--featured']">
              <div v-if="t.tag" :class="['chip', 'tier-chip', t.featured ? 'tier-chip--primary' : 'tier-chip--lav']">
                {{ t.tag }}
              </div>
              <h3 class="tier-name">{{ t.name }}</h3>
              <p class="tier-note">{{ t.note }}</p>
              <div class="tier-price">
                <span class="tier-amount">${{ t.price }}</span>
                <span class="tier-period">/ year</span>
              </div>
              <a :class="['btn', t.featured ? 'btn-primary' : 'btn-soft', 'tier-cta']"
                href="#" @click.prevent>{{ t.cta }}</a>
            </div>
          </AppReveal>
        </div>
        <p class="tiers-note center">
          Premium memberships are paid securely by card · Committee membership is free via a short form.
        </p>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section section-tint benefits-section">
      <AppKoru :size="400" :extra-style="{ top: '-120px', right: '-120px' }" />
      <div class="wrap section-wrap">
        <div class="grid grid-2 benefits-grid">
          <AppReveal>
            <div class="card benefit-card">
              <div class="bubble"><AppIcon name="sparkle" /></div>
              <h3 class="benefit-title">Your Premium benefits</h3>
              <ul class="benefit-list">
                <li v-for="(b, i) in premiumBenefits" :key="i" class="benefit-item">
                  <div class="bubble bubble-check"><AppIcon name="check" size="15" /></div>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </AppReveal>
          <AppReveal :delay="100">
            <div class="card benefit-card">
              <div class="bubble rose"><AppIcon name="shield" /></div>
              <h3 class="benefit-title">Multiples NZ — included</h3>
              <p class="benefit-intro">Every membership also connects you to the national body and its benefits:</p>
              <ul class="benefit-list">
                <li v-for="(b, i) in mnzBenefits" :key="i" class="benefit-item">
                  <div class="bubble rose bubble-check"><AppIcon name="check" size="15" /></div>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </AppReveal>
        </div>
      </div>
    </section>

    <!-- Key links -->
    <section class="section">
      <div class="wrap wrap-narrow">
        <SectionHead center eyebrow="Handy links" title="Ready when you are" />
        <div class="grid links-grid">
          <div class="card card-soft link-row">
            <div class="bubble bubble-md"><AppIcon name="mail" size="24" /></div>
            <div class="link-row-text">
              <strong>Membership form</strong>
              <span>Sign up in a few minutes</span>
            </div>
            <a class="btn btn-soft" href="#" @click.prevent>Open form</a>
          </div>
          <div class="card card-soft link-row">
            <div class="bubble lav bubble-md"><AppIcon name="people" size="24" /></div>
            <div class="link-row-text">
              <strong>Update your details</strong>
              <span>Moved house or added a pēpi? Let us know</span>
            </div>
            <a class="btn btn-soft" href="#" @click.prevent>Update</a>
          </div>
          <div class="card card-soft link-row">
            <div class="bubble rose bubble-md"><AppIcon name="shield" size="24" /></div>
            <div class="link-row-text">
              <strong>Pay by bank transfer</strong>
              <span>Otago Multiple Birth Club Inc · SBS Bank · 03 1355 0623340 00</span>
            </div>
            <span class="chip">Direct</span>
          </div>
        </div>
        <div class="links-cta center">
          <p class="links-cta-prompt">Not sure which membership suits you?</p>
          <NuxtLink to="/contact" class="btn btn-ghost">Ask the membership team <AppIcon name="chevron" /></NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Join Multiples Otago | Membership for Twin & Triplet Families',
  description: 'Become a member from $15/year. Unlock buddy support, playgroups, discounts, a free expectants pack, and a community of Otago parents who truly get the multiples journey.',
  path: '/join',
})

const tiers = [
  { name: 'Premium',   note: 'Multiples under 2 years', price: '40', featured: true,  tag: 'Most popular for new families', cta: 'Join — $40 / year' },
  { name: 'Premium',   note: 'Multiples over 2 years',  price: '15', featured: false, tag: '',                              cta: 'Join — $15 / year' },
  { name: 'Committee', note: 'For our volunteer crew',  price: '5',  featured: false, tag: 'Free via form',                 cta: 'Join the committee' },
]

const premiumBenefits = [
  'Newsletter with tips and insights',
  'Access to buddy support and the committee',
  'Free or subsidised entry to club events',
  'Free playgroups (where available)',
  'Pregnancy and post-birth support',
  'Breastfeeding support',
  'Access to local discounts',
  'Our Facebook community',
  'Voting rights at the AGM',
]

const mnzBenefits = [
  'Members-only content on the Multiples NZ website',
  'Online copies of the quarterly magazine',
  'National discounts at a wide range of retailers',
  'One free jumbo box of Huggies nappies when your pēpi arrive',
]
</script>

<style scoped>
/* ── Tiers ── */
.tiers-section { padding-top: 12px; }
.tiers-grid    { align-items: stretch; }

.tier-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--hairline-soft);
}
.tier-card--featured {
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--accent);
  background: var(--accent-mist);
}

.tier-chip         { align-self: flex-start; margin-bottom: 14px; }
.tier-chip--primary { background: var(--accent-deep); color: #fff; }
.tier-chip--lav    { background: var(--lavender); color: var(--lavender-deep); }

.tier-name   { font-size: 1.5rem; margin-bottom: 2px; }
.tier-note   { color: var(--ink-2); margin-bottom: 18px; }

.tier-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 22px;
}
.tier-amount {
  font-family: var(--font-head);
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-ink);
  line-height: 1;
}
.tier-period { color: var(--ink-3); }
.tier-cta    { margin-top: auto; justify-content: center; }

.tiers-note { color: var(--ink-3); font-size: .9rem; margin-top: 22px; }

/* ── Benefits ── */
.benefits-section { overflow: hidden; }
.section-wrap     { position: relative; z-index: 1; }
.benefits-grid    { gap: 40px; }

.benefit-card  { height: 100%; }
.benefit-title { margin-top: 18px; }
.benefit-intro { color: var(--ink-2); }

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 11px;
}
.benefit-item {
  display: flex;
  gap: 11px;
  align-items: flex-start;
}

.bubble-check {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  flex: none;
}
.bubble-md {
  width: 48px;
  height: 48px;
}

/* ── Links ── */
.links-grid { gap: 14px; }

.link-row {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 22px;
}
.link-row-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.link-row-text strong {
  font-family: var(--font-head);
  font-weight: 700;
}
.link-row-text span {
  color: var(--ink-2);
  font-size: .92rem;
  word-break: break-word;
}

.links-cta        { margin-top: 34px; }
.links-cta-prompt { color: var(--ink-2); }
</style>
