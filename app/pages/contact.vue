<template>
  <main>
    <PageHero
      te-reo="Whakapā mai · Contact"
      title="We'd love to hear from you"
      lead="Friendly advice, support and information on preparing for and parenting twins, triplets and higher-order multiples — whenever you need it."
    />

    <section class="section section-flush">
      <div class="wrap">
        <div class="contact-grid">

          <!-- Left: form -->
          <div>
            <h3 id="contact-form-title" class="col-heading">Send us a message</h3>

            <!-- Thank you state -->
            <div v-if="sent" class="card center thankyou-card">
              <div class="bubble bubble-lg"><AppIcon name="check" size="32" /></div>
              <h3>Ngā mihi — message received</h3>
              <p class="thankyou-body">Thank you for reaching out. One of our parent volunteers will be in touch as soon as we can. 💙</p>
              <button class="btn btn-soft" @click="sent = false">Send another</button>
            </div>

            <!-- Form -->
            <form v-else class="card contact-form" aria-labelledby="contact-form-title" @submit.prevent="sent = true">
              <p class="form-required-note"><span aria-hidden="true">*</span> Required fields</p>
              <div class="field-group">
                <label class="form-label" for="contact-name">Your name <span class="req" aria-hidden="true">*</span></label>
                <input id="contact-name" class="form-field" required aria-required="true" placeholder="First and last name" autocomplete="name" />
              </div>
              <div class="field-group">
                <label class="form-label" for="contact-email">Email <span class="req" aria-hidden="true">*</span></label>
                <input id="contact-email" type="email" class="form-field" required aria-required="true" placeholder="you@example.com" autocomplete="email" />
              </div>
              <div class="field-group">
                <label class="form-label" for="contact-subject">Subject</label>
                <input id="contact-subject" class="form-field" placeholder="What's this about?" />
              </div>
              <div class="field-group">
                <label class="form-label" for="contact-message">Message <span class="req" aria-hidden="true">*</span></label>
                <textarea id="contact-message" class="form-field" required aria-required="true" placeholder="Tell us how we can help — no question is too small." />
              </div>
              <button class="btn btn-primary btn-lg btn-submit" type="submit">
                Send message <AppIcon name="arrow" />
              </button>
            </form>
          </div>

          <!-- Right: contacts -->
          <div>
            <h3 class="col-heading">Reach the right person</h3>
            <div class="roles-list">
              <a v-for="r in roles" :key="r.role" :href="'mailto:' + r.email" class="card card-soft role-card">
                <div :class="['bubble', r.tint, 'bubble-sm']">
                  <AppIcon :name="r.icon" size="22" />
                </div>
                <div class="role-text">
                  <strong class="role-name">{{ r.role }}</strong>
                  <span class="role-email">{{ r.email }}</span>
                </div>
                <AppIcon name="mail" size="18" class="role-arrow" />
              </a>
            </div>

            <div class="card social-card">
              <h4 class="social-heading">Find us on Facebook</h4>
              <div class="social-links">
                <a class="btn btn-soft" href="https://www.facebook.com/otagomultiplebirth" target="_blank" rel="noreferrer">
                  <AppIcon name="facebook" /> Our page
                </a>
                <a class="btn btn-soft" href="https://www.facebook.com/groups/1714542008762720/" target="_blank" rel="noreferrer">
                  <AppIcon name="people" /> Members' group
                </a>
              </div>
              <p class="social-location">
                <AppIcon name="pin" size="16" class="social-pin" />
                Based in Dunedin, serving Dunedin, Wānaka, Balclutha &amp; Oamaru.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

usePageSeo({
  title: 'Contact Multiples Otago | Twins & Triplets Support, Dunedin',
  description: 'Reach the Multiples Otago team in Dunedin. Send us a message or email directly — friendly advice and support for families expecting or parenting twins, triplets and more.',
  path: '/contact',
})

const sent = ref(false)

const roles = [
  { role: 'President',             email: 'president.multiplesotago@gmail.com',  icon: 'heart',  tint: '' },
  { role: 'Membership',            email: 'membership.multiplesotago@gmail.com', icon: 'people', tint: 'lav' },
  { role: 'Secretary & discounts', email: 'secretary.multiplesotago@gmail.com',  icon: 'tag',    tint: 'rose' },
  { role: 'Treasurer',             email: 'treasurer.multiplesotago@gmail.com',  icon: 'shield', tint: '' },
]
</script>

<style scoped>
.section-flush { padding-top: 8px; }

/* ── Layout ── */
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
  gap: 44px;
  align-items: start;
}
@media (max-width: 860px) {
  .contact-grid { grid-template-columns: 1fr; }
}

.col-heading { margin-bottom: 16px; }

/* ── Form ── */
.contact-form { display: grid; gap: 18px; }

.form-required-note {
  font-size: .85rem;
  color: var(--ink-3);
  margin: 0;
}
.req { color: var(--accent-deep); margin-left: 2px; }

.field-group { display: flex; flex-direction: column; }

.btn-submit { justify-content: center; }

/* ── Thank you ── */
.thankyou-card {
  min-height: 420px;
  place-content: center;
  display: grid;
}
.bubble-lg {
  width: 64px;
  height: 64px;
  margin: 0 auto 18px;
}
.thankyou-body {
  color: var(--ink-2);
  max-width: 360px;
  margin: 0 auto;
}

/* ── Roles ── */
.roles-list { display: grid; gap: 12px; margin-bottom: 20px; }

.role-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 18px;
  text-decoration: none;
}
.bubble-sm { width: 44px; height: 44px; }

.role-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.role-name  { font-family: var(--font-head); font-weight: 700; }
.role-email { color: var(--ink-2); font-size: .86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.role-arrow { color: var(--ink-3); flex: none; }

/* ── Social card ── */
.social-card     { background: var(--accent-mist); }
.social-heading  { font-family: var(--font-head); margin: 0 0 12px; font-size: 1.05rem; }
.social-links    { display: grid; gap: 10px; }
.social-location {
  color: var(--ink-2);
  font-size: .88rem;
  margin: 16px 0 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}
.social-pin { color: var(--accent-deep); flex: none; margin-top: 2px; }
</style>
