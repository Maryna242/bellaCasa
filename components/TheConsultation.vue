<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full mt-[60px] md:mt-[80px] lg:mt-[100px] mb-[60px] md:mb-[80px] lg:mb-[120px] p-2 max-w-[1440px] relative mx-auto bg-background-consultation bg-center bg-cover">
        <div class="max-w-[1240px] my-0 mx-auto">
            <h3 class="flex flex-col items-center lg:gap-2 font-fixel font-extralight text-white text-xl md:text-[28px] lg:text-[32px] text-center pt-[60px] md:pt-10 lg:pt-20">
                <p>
                    {{ $t('consultation.title1') }}
                </p>
                <p>
                    {{ $t('consultation.title2') }}
                </p>
            </h3>
            <div class="flex justify-center mt-5 md:mt-3 lg:mt-[18px] lg:mb-20 md:mb-11 mb-20">
                <button 
                    class="bg-[#F8B1AB] py-3 px-9 rounded text-white font-fixel border-2 border-[#F8B1AB] hover:bg-white hover:text-[#F8B1AB] active:border-[#F28B82] active:bg-white active:text-[#F28B82] transition colors"
                    @click="onPopup"
                    >
                    {{ $t('consultation.button') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheConsultation',
    methods:{
        onPopup(){
            this.$emit('showPopup')
        }
    }
}
</script>

<style lang="scss">
.fade-popup-enter-active, .fade-popup-leave-active {
    transition: opacity .3s ease-in-out;
}
.fade-popup-enter, .fade-popup-leave-to{
    opacity: 0;
}
</style>
