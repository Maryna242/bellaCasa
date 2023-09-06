<template>
    <div ref="container" class="subtitle w-full max-w-[1440px] my-0 mx-auto lg:px-[100px] md:px-8 px-4 ">
        <div class="max-w-[1240px] my-0 mx-auto">
            <div class="flex justify-center mt-[33px] md:mt-[60px] lg:mt-16 mb-[100px] pb-[62px] md:pb-[80px] border-b ">
                <h3 class="inline-flex flex-wrap lg:text-[32px] md:text-[28px] text-[20px] text-[#2B2B2B] font-fixel font-extralight text-center md:max-w-[700px] lg:max-w-[750px] relative pt-[74px] md:pt-[60px] pl-0 md:pl-[35px] lg:pl-50px before:content-[''] before:absolute before:-left-[36px] md:before:left-8 lg:before:-left-5 before:top-0 before:bg-qoute before:bg-contain before:w-[109px] before:h-[109px]">
                    <span
                        v-for="(symbol, index) in $t('subtitle.title').split('')"
                        :key="index"
                        class="wow min-w-[8px]"
                        v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '.25s', 'animation-delay': `${.05 * (index + 1)}s`}"
                    >
                        {{ symbol }}
                    </span>
                </h3>
            </div>
            <the-description/>
            <the-results/>
        </div>
    </div>
</template>
    
<script>
import TheDescription from './TheDescription.vue'
import TheResults from './TheResults.vue'

export default {
    components: { 
        TheDescription, 
        TheResults,
    },
    name: 'TheSubtitle',
    data() {
        return {
            container: null,
        }
    },
}
</script>
<style lang="scss">
 .v--vtt-fade {
    will-change: transform, opacity;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.v--vtt-fade_visible {
    opacity: 1;
    transform: translateY(0);
}

.v--vtt-fade_hidden {
    opacity: 0;
    transform: translateY(20px);
}

</style>