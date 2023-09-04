<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full max-w-[1440px] my-0 mx-auto lg:px-[100px] md:px-8 px-4">
        <div class="max-w-[1240px] my-0 mx-auto">
            <div class="flex justify-center mt-5 md:mt-[60px] lg:mt-16 lg:mb-[100px] md:mb-[80px] mb-10 pb-10 md:pb-[80px] border-b ">
                <h3 class=" lg:text-[32px] md:text-[28px] text-[20px] text-[#2B2B2B] font-fixel font-extralight text-center md:max-w-[700px] lg:max-w-[750px] relative pt-[74px] md:pt-[70px] pl-0 md:pl-[100px] lg:pl-[45px] before:content-[''] before:absolute before:-left-[70px] md:before:left-8 lg:before:-left-5 before:top-0 before:bg-qoute before:bg-contain before:w-[109px] before:h-[109px]">
                    {{ $t('text.title') }}
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