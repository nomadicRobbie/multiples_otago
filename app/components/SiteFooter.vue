<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="values-band footer-values">
        <div class="val"><b>Kotahitaka</b><span>Unity · togetherness</span></div>
        <span class="sep">·</span>
        <div class="val"><b>Manaaki</b><span>Care · hospitality</span></div>
        <span class="sep">·</span>
        <div class="val"><b>Whanaungataka</b><span>Kinship · belonging</span></div>
      </div>

      <div class="footer-grid">
        <div>
          <img src="/assets/logo-horizontal.png" alt="Multiples Otago" class="footer-logo" />
          <p class="footer-blurb">
            Support, friendship and encouragement for families expecting and parenting twins, triplets
            and higher-order multiples across Otago.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li v-for="[path, label] in NAV" :key="path">
              <NuxtLink :to="path">{{ label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul class="footer-links">
            <li><a href="mailto:president.multiplesotago@gmail.com">President</a></li>
            <li><a href="mailto:membership.multiplesotago@gmail.com">Membership</a></li>
            <li><a href="mailto:secretary.multiplesotago@gmail.com">Secretary</a></li>
            <li><a href="mailto:treasurer.multiplesotago@gmail.com">Treasurer</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul class="footer-links">
            <li><a href="https://www.facebook.com/otagomultiplebirth" target="_blank" rel="noreferrer">Facebook page</a></li>
            <li><a href="https://www.facebook.com/groups/1714542008762720/" target="_blank" rel="noreferrer">Members' group</a></li>
            <li><a href="http://www.multiples.org.nz" target="_blank" rel="noreferrer">Multiples NZ</a></li>
          </ul>
          <p class="footer-region">Serving Dunedin, Wānaka,<br>Balclutha &amp; Oamaru.</p>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© Multiples Otago · Otago Multiple Birth Club Inc.</span>
        <span>Affiliated to Multiples NZ · A volunteer organisation run by parents, for parents.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const NAV: [string, string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/join', 'Join'],
  ['/events', 'Events'],
  ['/support', 'Support'],
  ['/contact', 'Contact'],
]
</script>

<style scoped>
.footer-values {
  margin-bottom: 44px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}
.footer-logo {
  height: 60px;
  width: auto;
  margin-bottom: 16px;
}
.footer-blurb {
  color: #9fb2b8;
  max-width: 300px;
  font-size: .95rem;
  margin-bottom: 0;
}
.footer-region {
  color: #9fb2b8;
  font-size: .85rem;
  margin-top: 16px;
  margin-bottom: 0;
}
</style>
