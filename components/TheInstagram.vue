<template>
    <div class=" w-full max-w-[1440px] my-0 mx-auto lg:pt-[122px] pt-[86px] pb-[63px] relative overflow-hidden lg:mt-[120px] mt-[80px]">
        <div class=" ">
            <p class="font-fixel sm:text-lg text-base font-medium text-[#4E4747] md:pl-[calc(15%+311px)] sm:pl-[calc(5%+245px)] pl-[146px] pb-5">
                <span class="max-w-[425px] block">
                    Більше натхнення та новин в сфері дизайну 
                    в нашому <a href="https://www.instagram.com/salon_bella_casa" class="text-[#F8B1AB] border-b border-[#F8B1AB]">Instagram</a> долучайся!
                </span>
            </p>
        </div>
        <div class=" flex items-center gap-3 lg:gap-5 justify-center">
            <div v-for="(item, index) in slides" 
                :key="index"
                class="flex object-contain lg:w-[240px] sm:w-[140px] w-[80px] lg:min-w-[240px] sm:min-w-[140px] min-w-[80px] lg:h-[240px] sm:h-[140px] h-[80px]"
            >
                <img :src="item.url" alt="" class="w-full h-auto">
            </div>
        </div>
        <img src="~/static/img/Frame_205_3.webp" alt="" class=" absolute top-0 md:left-[15%] sm:left-[5%] -left-[18px] lg:w-[291px] sm:w-[229px] w-[152px]">
        <p class=" font-fixel font-extrabold text-[66px] text-[#DFDFE8] lg:pr-[100px] ml-auto text-end sm:pt-0 pt-[44px]">
            #bellacasa
        </p>
    </div>
</template>

<script>
import Img_1 from '~/static/img/Rectangle_37_1.webp'
import Img_2 from '~/static/img/Rectangle_30_2.webp'
import Img_4 from '~/static/img/Rectangle_33_4.webp'
import Img_5 from '~/static/img/Rectangle_32_5.webp'
import Img_6 from '~/static/img/Rectangle_34_6.webp'
import Img_7 from '~/static/img/Rectangle_35_7.webp'
    export default{
        name:'TheInstagram',
        data() {
            return {
                slides: [
                    {
                        url: Img_1 
                    },
                    {
                        url: Img_2
                    },
                    // {
                    //     url: Img_3 
                    // },
                    {
                        url: Img_4 
                    },
                    {
                        url: Img_5 
                    },
                    {
                        url: Img_6 
                    },
                    {
                        url: Img_7 
                    },
                ]
            }
        }
    }
</script>