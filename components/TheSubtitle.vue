<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto lg:px-[100px] md:px-8 px-4">
        <div class="max-w-[1240px] my-0 mx-auto">
            <div class="flex justify-center mt-[33px] md:mt-[60px] lg:mt-16 mb-[100px] pb-[62px] md:pb-[80px] border-b ">
                <h3 class="lg:text-[32px] md:text-[28px] text-[20px] text-[#2B2B2B] font-fixel font-extralight text-center md:max-w-[700px] lg:max-w-[750px] relative pt-[74px] md:pt-[60px] pl-0 md:pl-[35px] lg:pl-50px before:content-[''] before:absolute before:-left-[36px] md:before:left-8 lg:before:-left-5 before:top-0 before:bg-qoute before:bg-contain before:w-[109px] before:h-[109px]">
                    Оживіть свій будинок із нашими вишуканими шторами: вітаємо у нашому салоні!
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
  components: { TheDescription, TheResults },
  name: 'TheSubtitle'
}
</script>