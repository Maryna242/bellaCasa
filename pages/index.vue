<template>
    <div class="flex flex-col">
        <Header />
        <Intro/>
        <the-subtitle/>
        <the-advantages/>
        <the-best-offers/>
    </div>
</template>

<script>
import TheAdvantages from '../components/TheAdvantages.vue'
import TheBestOffers from '../components/TheBestOffers.vue'
import TheSubtitle from '../components/TheSubtitle.vue'
export default {
  components: { TheSubtitle, TheAdvantages, TheBestOffers },
    name: 'IndexPage'
}
</script>
