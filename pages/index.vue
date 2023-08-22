<template>
    <div class="flex flex-col bg-[#F9F9FB]" @scroll="onScroll">
        <Header />
        <Intro/>
        <the-subtitle/>
        <the-advantages/>
        <the-projects :width="width"/>
        <the-steps/>
        <the-variants/>
        <the-questions/>
        <the-contacts/>
        <the-best-offers :width="width"/>
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

export default {
    name: 'IndexPage',
    data() {
        return {
            width: 0,
        }
    },
    mounted() {
        this.updateWidth()
        window.addEventListener('resize', this.updateWidth)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth)
    },
    methods: {
        onScroll() {
            console.log('scroll');
        },
        updateWidth() {
            this.$nextTick(() => {
                this.width = window.innerWidth
            })
        },
    }
}
</script>
