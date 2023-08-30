<template>
    <div class="grid md:grid-cols-2 grid-cols-1 md:mb-10 md:gap-5 gap-11">
        <div class="md:max-w-[505px]">
            <h3 class="font-fixel text-xl md:text-[28px] lg:text-[32px] font-extralight text-[#2B2B2B] mb-6">
                {{ info.title }}
            </h3>
            <span class="font-fixel font-medium text-[#4E4747] md:text-lg text-base">
                {{ info.subtitle }}
            </span>
            <p class="font-fixel text-[#2B2B2B] text-[15px] font-light pt-3">
                {{ info.paragraph }} 
            </p>
        </div>
        <div class="flex lg:flex-row flex-col">
            <div class="lg:max-w-[calc(100%-105px)]">
                <swiper
                    :space-between="1"
                    :navigation="{nextEl: '.item-next', prevEl: '.item-prev'}"
                    class="relative"
                    @slideChange="onFirstSliderChange"
                    @swiper="onFirstSwiper"
                >
                    <swiper-slide
                        v-for="(slide, index) in photo"
                        :key="index"
                        class="!h-[310px] flex"
                    >
                        <NuxtImg :src="slide.url" :alt="index" width="400px" height="380px" class="w-full object-cover"/>
                    </swiper-slide>
                    <div class="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between z-10">
                        <div
                            :id="`item-prev`"
                            class="item-prev cursor-pointer -scale-x-100"
                        />
                        <div
                            :id="`item-next`"
                            class="item-next cursor-pointer"
                        />
                    </div>
                </swiper>
            </div>
            <div class="lg:ml-5 mt-5 lg:mt-0">
                <swiper
                    :direction="swiperDirection"
                    class=" overflow-hidden max-h-[310px] h-full max-w-full"
                    :slidesPerView="3"
                    @swiper="onSecondSwiper"
                    @slideChange="onSecondSliderChange"
                >
                    <swiper-slide
                        v-for="(slide, index) in photo"
                        :key="index"
                        class="flex !max-h-[90px] lg:!w-[85px] lg:mb-5 mr-5 lg:mr-0 z-50"
                    >
                        <NuxtImg
                            :src="slide.url" :alt="index" width="85" height="90" class="w-full object-cover"
                            @click="onClickSecondSwiper(index)"
                        />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, SwiperCore  } from 'swiper-vue2';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation]);
export default {
    name: 'TheProjectsItem',
    props:{
        photo:{
            type: Array,
            required: true,
        },
        info:{
            type: Object,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        swiperDirection(){
            return this.width < 1024 ? 'horizontal': 'vertical'
        }
    },
    data() {
        return {
            firstSwiper: null,
            secondSwiper: null
        };
    },
    methods: {
        onFirstSliderChange(e) {
            this.secondSwiper?.slideTo(e.activeIndex)
        },
        onSecondSliderChange(e) {
            this.firstSwiper?.slideTo(e.activeIndex)
        },
        onFirstSwiper(swiper) {
            this.firstSwiper = swiper;
        },
        onSecondSwiper(swiper) {
            this.secondSwiper = swiper;
        },
        onClickSecondSwiper(index) {
            this.firstSwiper?.slideTo(index)
        },
    },
}
</script>
<style lang="scss">
    .item-next{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/chevron-right.webp');
            width: 24px;
            height: 24px;
            background: #D9D9D9;
            mask-size: contain;
        }
        
        &:hover{
            &::before {
                background: #FFF;
            }
        }
    }
    .item-prev{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/chevron-right.webp');
            width: 24px;
            height: 24px;
            background: #D9D9D9;
            mask-size: contain;
        }
        
        &:hover{
            &::before {
                background: #FFF;
            }
        }
    }
</style>