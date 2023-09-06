<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full max-w-[1440px] my-0 mx-auto lg:px-[100px] md:px-8 px-4">
        <div class="max-w-[1240px] my-0 mx-auto">
            <div class="flex justify-center mt-5 md:mt-[60px] lg:mt-16 lg:mb-[100px] md:mb-[80px] mb-10 pb-10 md:pb-[80px] border-b ">
                <h3 class="inline-flex flex-wrap lg:text-[32px] md:text-[28px] text-[20px] text-[#2B2B2B] font-fixel font-extralight text-center md:max-w-[700px] lg:max-w-[750px] relative pt-[74px] md:pt-[60px] pl-0 md:pl-[35px] lg:pl-50px before:content-[''] before:absolute before:-left-[36px] md:before:left-8 lg:before:-left-5 before:top-0 before:bg-qoute before:bg-contain before:w-[109px] before:h-[109px]">
                    <span
                        v-for="(symbol, index) in $t('text.title').split('')"
                        :key="index"
                        class="wow min-w-[8px]"
                        v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '.25s', 'animation-delay': `${.05 * (index + 1)}s`}"
                    >
                        {{ symbol }}
                    </span>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheText',
    }
</script>