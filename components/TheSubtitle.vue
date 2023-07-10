<template>
    <div class="w-full max-w-[1440px]">
        <div class="max-w-[1240px] my-0 mx-auto p-2">
            <div class="flex justify-center my-16 pb-14 border-b px-2">
                <img src="../static/img/q_icon.png" width="109px" height="109px" alt="quotes">
            <h3 class="text-[32px] font-fixel font-extralight text-center max-w-[750px]">
                Оживіть свій будинок із нашими вишуканими шторами: вітаємо у нашому салоні!
            </h3>
            </div>
            <the-description/>
        </div>
    </div>
</template>
    
<script>
import TheDescription from './TheDescription.vue'
export default {
  components: { TheDescription },
  name: 'TheSubtitle'
}
</script>