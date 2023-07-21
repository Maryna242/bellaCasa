<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto">
            <div class="flex justify-center mt-16 mb-[100px] pb-[80px] border-b px-2">
                <!-- <img src="~/static/img/q_icon.png" width="109px" height="109px" alt="quotes"> -->
                <h3 class="text-[32px] font-fixel font-extralight text-center max-w-[790px] relative pt-[54px] pl-[57px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-qoute before:bg-contain before:w-[109px] before:h-[109px]">
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