<template>
    <div data-aos="fade-up" data-aos-delay="100" class=" w-full max-w-[1440px] my-0 mx-auto lg:pt-[122px] pt-[86px] pb-[63px] relative overflow-hidden lg:mt-[120px] mt-[80px]">
        <div class=" ">
            <p class="font-fixel sm:text-lg text-base font-medium text-[#4E4747] md:pl-[calc(15%+311px)] sm:pl-[calc(5%+245px)] pl-[146px] pb-5">
                <span class="max-w-[425px] block">
                    {{ $t('instagram.title') }}
                    <a href="https://www.instagram.com/salon_bella_casa" class="text-[#F8B1AB] hover:text-[#F28B82] transition-colors hover:border-[#F28B82] border-b border-[#F8B1AB]">Instagram</a> 
                    {{ $t('instagram.span') }}
                </span>
            </p>
        </div>
        <div class=" flex items-center gap-3 lg:gap-5 justify-center">
            <div v-for="(item, index) in slides" 
                :key="index"
                class="flex object-contain lg:w-[240px] sm:w-[140px] w-[80px] lg:min-w-[240px] sm:min-w-[140px] min-w-[80px] lg:h-[240px] sm:h-[140px] h-[80px]"
            >
                <NuxtImg 
                    :src="item.url" 
                    alt="img" 
                    class="w-full h-auto"
                    width="480"
                    height="480"
                    :placeholder="[240, 240, 25, 50]"
                />
            </div>
        </div>
        <NuxtImg 
            src="/img/Frame_205_3.webp" 
            alt="img" 
            class=" absolute top-0 md:left-[15%] sm:left-[5%] -left-[18px] lg:w-[291px] sm:w-[229px] w-[152px]"
            width="580"
            height="1160"
            :placeholder="[290, 580, 25, 50]"
            
        />
        <p class=" font-fixel font-extrabold text-[66px] text-[#DFDFE8] lg:pr-[100px] ml-auto text-end sm:pt-0 pt-[44px]">
            #bellacasa
        </p>
    </div>
</template>

<script>
    export default{
        name:'TheInstagram',
        data() {
            return {
                slides: [
                    {
                        url: '/img/Rectangle_37_1.webp' 
                    },
                    {
                        url: '/img/Rectangle_30_2.webp'
                    },
                    // {
                    //     url: Img_3 
                    // },
                    {
                        url: '/img/Rectangle_33_4.webp' 
                    },
                    {
                        url: '/img/Rectangle_32_5.webp'
                    },
                    {
                        url: '/img/Rectangle_34_6.webp'
                    },
                    {
                        url: '/img/Rectangle_35_7.webp' 
                    },
                ]
            }
        }
    }
</script>