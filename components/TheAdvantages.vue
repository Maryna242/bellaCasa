<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full mt-[40px]" id="advantages-section">
        <div class="max-w-[1440px] my-0 mx-auto">
            <div class="flex lg:mb-[120px] md:mb-[80px] mb-[60px] bg-[#0B3B60] relative md:pt-[176px] pt-[186px] lg:pt-0 before:content-[''] before:bg-bottom  before:bg-mosaic-mob md:before:bg-[initial] md:before:bg-mosaic md:before:top-0 md:before:left-[initial] md:before:bg-cover before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full md:before:max-w-[250px] before:bg-no-repeat before:bg-contain ">
                <div class="flex lg:w-1/4 w-[180px] h-[240px] -top-[67px] absolute lg:static lg:h-auto">
                    <NuxtImg src="/img/photo_2023-06-27_20-01-58.webp" class="object-cover" width="357px" height="619px" alt="img"/>
                </div>
                <div class=" flex-col lg:px-[58px] md:px-8 px-4 relative lg:w-3/4 flex">
                    <h2 class="text-white lg:text-[32px] md:text-[28px] text-2xl font-montserrat font-semibold z-10 lg:pt-[80px] md:translate-y-[calc(-100%-10px)] lg:translate-y-0 md:pl-[170px] lg:pl-0">
                        {{ $t('advantages.title') }}
                    </h2>
                    <ul class="flex flex-col items-center z-20 lg:pt-12 pt-5 pb-[60px] ">
                        <li
                            v-for="(item, index) in ourAdvantages" 
                            :key="index"
                            class="pb-4 mt-4 border-b border-[#345975]"
                            :class="index === ourAdvantages.length - 1 && 'border-b-0'"
                        >
                            <div class="grid md:grid-cols-2 gap-5">
                                <div class="flex gap-4  items-center">
                                    <span class="text-[#F8B1AB] lg:text-[32px] md:text-[28px] text-xl font-montserrat font-semibold">
                                        0{{ index + 1 }}
                                    </span>
                                    <span class="text-white lg:text-[32px] md:text-[28px] text-xl font-fixel font-extralight">
                                        {{ item.h3 }}
                                    </span>
                                </div>
                                <div class="text-white font-fixel md:text-base text-sm font-normal max-w-[460px]">
                                    {{ item.text }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
    
    <script>
    export default {
        name: 'TheAdvantages',
            data() {
                return {
                    ourAdvantages: [
                        {
                            index: '01',
                            h3: this.$t('advantages.subtitle1'),
                            text: this.$t('advantages.paragraph1')
                        },
                        {
                            index: '02',
                            h3: this.$t('advantages.subtitle2'),
                            text: this.$t('advantages.paragraph2')
                        },
                        {
                            index: '03',
                            h3: this.$t('advantages.subtitle3'),
                            text: this.$t('advantages.paragraph3')
                        },
                        {
                            index: '04',
                            h3: this.$t('advantages.subtitle4'),
                            text: this.$t('advantages.paragraph4')
                        },
                    ]
                }
            }
    }
    </script>