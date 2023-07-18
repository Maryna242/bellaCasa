<template>
    <div class="flex flex-col">
        <Header />
        <Intro/>
        <the-subtitle/>
        <the-advantages/>
        <the-best-offers/>
        <the-variants/>
        <the-steps/>
        <the-projects/>
        <the-questions/>
        <the-contacts/>
        <the-consultation/>
        <the-history/>
    </div>
</template>

<script>
import TheAdvantages from '../components/TheAdvantages.vue'
import TheBestOffers from '../components/TheBestOffers.vue'
import TheConsultation from '../components/TheConsultation.vue'
import TheProjects from '../components/TheProjects.vue'
import TheQuestions from '../components/TheQuestions.vue'
import TheSteps from '../components/TheSteps.vue'
import TheSubtitle from '../components/TheSubtitle.vue'
import TheVariants from '../components/TheVariants.vue'
export default {
  components: { TheSubtitle, TheAdvantages, TheBestOffers, TheVariants, TheSteps, TheProjects, TheQuestions, TheConsultation },
    name: 'IndexPage'
}
</script>
