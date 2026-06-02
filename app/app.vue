<template>
  <div>
    <NuxtRouteAnnouncer />
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <SiteHeader />
    <div id="main-content" tabindex="-1">
      <NuxtPage />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const config  = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['Organization', 'LocalBusiness'],
        name: 'Multiples Otago',
        alternateName: 'Otago Multiple Birth Club Inc.',
        description:
          'Support, friendship and encouragement for families expecting and parenting twins, triplets and higher-order multiples across the Otago region.',
        url: siteUrl,
        logo: `${siteUrl}/assets/logo-horizontal.png`,
        image: `${siteUrl}/assets/logo-horizontal.png`,
        email: 'president.multiplesotago@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dunedin',
          addressRegion: 'Otago',
          addressCountry: 'NZ',
        },
        areaServed: [
          { '@type': 'City', name: 'Dunedin' },
          { '@type': 'City', name: 'Wānaka' },
          { '@type': 'City', name: 'Balclutha' },
          { '@type': 'City', name: 'Oamaru' },
        ],
        sameAs: [
          'https://www.facebook.com/otagomultiplebirth',
          'https://www.facebook.com/groups/1714542008762720/',
          'http://www.multiples.org.nz',
        ],
        memberOf: {
          '@type': 'Organization',
          name: 'Multiples NZ',
          url: 'http://www.multiples.org.nz',
        },
        foundingDate: '1972',
      }),
    },
  ],
})
</script>
