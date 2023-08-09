<template>
    <div class=" w-full max-w-[1440px] my-0 py-[135px] relative">
        <div class=" ">
            <p class=" font-fixel text-lg font-medium text-[#4E4747] pl-[calc(15%+311px)] pb-5">
                Більше натхнення та новин в сфері дизайну 
                в нашому <span class="text-[#F8B1AB] border-b border-[#F8B1AB]">Instagram</span> долучайся! 
            </p>
        </div>
        <div class=" flex items-center gap-5">
            <div v-for="(item, index) in slides" 
                :key="index"
                class="flex object-contain"
            >
                <img :src="item.url" alt="">
            </div>
        </div>
        <img src="~/static/img/Frame_205_3.webp" alt="" class=" absolute top-0 bottom-0 left-[15%] w-[291px]">
        <span class=" font-fixel font-extrabold text-[66px] text-[#DFDFE8] lg:pl-[calc(15%+741px)]">
            #bellacasa
        </span>
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