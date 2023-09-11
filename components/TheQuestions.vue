<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full my-[60px] md:my-[80px] lg:mt-[100px] lg:mb-[120px] p-2 max-w-[1440px] mx-auto relative bg-[#0B3B60] before:content-[''] before:bg-bottom before:bg-mosaic-mob md:before:bg-[initial] md:before:bg-mosaic md:before:bg-cover md:before:top-0 md:before:left-[initial] before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full md:before:max-w-[320px]  before:bg-contain before:bg-no-repeat">
        <div class="max-w-[1240px] my-0 mx-auto px-5 md:px-[42px] lg:px-[111px]">
            <div class="">
                <h2 class="text-white font-semibold font-montserrat text-2xl md:text-[28px] lg:text-[32px] text-center mt-10 md:mt-[60px] lg:mt-20 mb-[60px] z-10 relative">
                    {{ $t('questions.title') }}
                </h2>
                <div class=" mb-20">
                    <ul class="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 ">
                        <li 
                            v-for="(item, index) in ourQuestions"
                            :key="index"
                            class="flex flex-col border-2 border-[#234F70] z-10 p-6 gap-2 flex-wrap"
                        >
                            <span class="font-montserrat font-semibold text-2xl md:text-[32px] text-[#F8B1AB]">
                                0{{ index + 1 }}
                            </span>
                            <span class="font-display font-medium text-lg text-white">
                                {{ item.title }}
                            </span>
                            <p class="with-emoji font-display text-sm md:text-base font-normal text-[#728A9C]" v-html="item.text" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheQuestions',
    data() {
        return {
            ourQuestions: [
                {
                    title: this.$t('questions.subtitle1'),
                    text: this.$t('questions.paragraph1') 
                },
                {
                    title: this.$t('questions.subtitle2'),
                    text: this.$t('questions.paragraph2') 
                },
                {
                    title: this.$t('questions.subtitle3'),
                    text: this.$t('questions.paragraph3') 
                },
                {
                    title: this.$t('questions.subtitle4'),
                    text: this.$t('questions.paragraph4') 
                },
                {
                    title: this.$t('questions.subtitle5'),
                    text: this.$t('questions.paragraph5') 
                },
                {
                    title: this.$t('questions.subtitle6'),
                    text: this.$t('questions.paragraph6') 
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.with-emoji {
    >svg {
        width: 15px;
        height: 15px;
        display: inline;
    }
}
</style>