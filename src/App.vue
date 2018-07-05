<template>
  <div id="app">
    <PhilaHeader/>
    <div id="page">
      <div id="content">
        <PhilaHero img="https://beta.phila.gov/media/20170523142115/prisons-cover-image-shade1.jpg">
          Find someone in jail or prison
        </PhilaHero>
        <PhilaBreadcrumbs/>
        <main>
          <router-view/>
        </main>
        <RelatedContent/>
      </div>
    </div>
    <PhilaFooter/>
  </div>
</template>

<script>
import PhilaHeader from '@/components/PhilaHeader'
import PhilaHero from '@/components/PhilaHero'
import PhilaBreadcrumbs from '@/components/PhilaBreadcrumbs'
import RelatedContent from '@/components/RelatedContent'
import PhilaFooter from '@/components/PhilaFooter'

export default {
  components: {
    PhilaHeader,
    PhilaHero,
    PhilaBreadcrumbs,
    RelatedContent,
    PhilaFooter
  }
}
</script>

<style lang="sass">
$fa-font-path: "~font-awesome/fonts"
@import '~phila-standards/src/sass/phila-standards'

main
  margin-bottom: 1rem
</style>
