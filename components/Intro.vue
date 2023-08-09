<template>
    <div class="w-full my-0 lg:min-h-[900px]">
        <div class="max-w-[1440px] mx-auto flex max-h-full flex-col md:flex-row">
            <div class="flex md:w-1/2 w-full min-h-[644px] md:min-h-[1027px]">
                <img src="~/static/img/hui.png" alt="gif" class="w-full object-cover">                
            </div>
            <div class="min-h-[450px] md:min-h-auto bg-[#0B3B60] relative before:content-[''] before:bg-mosaic-mob before:bg-contain before:bg-bottom md:before:bg-[initial] md:before:bg-mosaic before:absolute before:right-0 md:before:top-0 before:bottom-0 before:left-0 md:before:left-[initial] before:min-h-[375px] md:before:min-h-auto before:w-full md:before:max-w-[350px] before:bg-no-repeat md:before:bg-cover w-full md:w-1/2 flex"/>
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
