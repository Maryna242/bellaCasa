<template>
    <div class="w-full my-0 h-[900px]">
        <div class="max-w-[1440px] mx-auto flex max-h-full">
            <div class="flex w-1/2">
                <img src="../static/img/hui.png" alt="gif" class="w-full object-cover">                
            </div>
            <div class="bg-[#0B3B60] relative before:content-[''] before:bg-mosaic before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[350px] before:bg-no-repeat before:bg-cover w-1/2 flex" >
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
