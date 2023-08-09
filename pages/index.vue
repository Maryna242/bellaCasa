<template>
    <div class="flex flex-col bg-[#F9F9FB]" @scroll="onScroll">
        <Header />
        <Intro/>
        <the-subtitle/>
        <the-advantages/>
        <the-best-offers/>
        <the-variants/>
        <the-steps/>
        <!-- <the-projects/> -->
        <the-questions/>
        <the-contacts/>
        <the-consultation/>
        <the-history/>
        <the-text/>
        <the-customers/>
        <the-shape/>
        <!-- <the-instagram/> -->
        <the-footer/>   
    </div>
</template>

<script>

export default {
    name: 'IndexPage',
    methods: {
        onScroll() {
            console.log('scroll');
        }
    }
}
</script>
