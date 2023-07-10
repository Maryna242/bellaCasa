<template>
    <div class="flex flex-col">
        <Header />
        <Intro/>
        <the-subtitle/>
    </div>
</template>

<script>
import TheSubtitle from '../components/TheSubtitle.vue'
export default {
  components: { TheSubtitle },
    name: 'IndexPage'
}
</script>
