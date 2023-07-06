<template>
    <div class="max-w-[1440px] my-0 mx-auto absolute">
        <div class="w-full flex relative">
            <div class="flex">
                <img src="../static/img/hui.png" alt="gif" class=" max-w-full h-auto">                
            </div>
            <div class="bg-[#0B3B60] relative before:content-[''] before:bg-mosaic before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[350px] before:bg-no-repeat before:bg-cover max-w-3xl w-full flex" >
            </div>
            <the-form />
        </div>
    </div>
</template>


<script>
import TheForm from './TheForm.vue'
export default {
  components: { TheForm },
  name: 'Intro'
}
</script>
