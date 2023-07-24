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
        <the-text/>
        <the-customers/>
        <the-shape/>
        <the-instagram/>
        <the-footer/>
    </div>
</template>

<script>
import TheAdvantages from '../components/TheAdvantages.vue'
import TheBestOffers from '../components/TheBestOffers.vue'
import TheConsultation from '../components/TheConsultation.vue'
import TheCustomers from '../components/TheCustomers.vue'
import TheProjects from '../components/TheProjects.vue'
import TheQuestions from '../components/TheQuestions.vue'
import TheSteps from '../components/TheSteps.vue'
import TheSubtitle from '../components/TheSubtitle.vue'
import TheVariants from '../components/TheVariants.vue'
import TheContacts from '../components/TheContacts.vue'
import TheHistory from '../components/TheHistory.vue'
import TheText from '../components/TheText.vue'
import TheShape from '../components/TheShape.vue'
import TheInstagram from '../components/TheInstagram.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: { TheSubtitle, TheAdvantages, TheBestOffers, TheVariants, TheSteps, TheProjects, TheQuestions, TheConsultation, TheCustomers, TheContacts, TheHistory, TheText, TheShape, TheInstagram, TheFooter },
    name: 'IndexPage'
}
</script>
