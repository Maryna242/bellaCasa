<template>
    <div
        class="flex gap-5"
        :class=" isEven ? 'pr-[100px]' : 'pl-[100px]'"
    >
        <div 
            class="w-1/4 flex items-center"
            :class=" isEven ? ' order-1' : '' "
        >
            <div class="flex flex-col gap-6">
                <h3 class="font-fixel text-[32px] text-[#4E4747] font-extralight">
                    {{ info.title }}
                </h3>
                <p class="font-fixel text-[15px] text-[#2B2B2B] font-light border-b pb-5">
                    {{ info.paragraph }}
                </p>
                <span class="font-fixel text-[#2B2B2B] font-medium text-lg">
                    {{ info.price }}
                </span>
            </div>
        </div>
        <div class="w-3/4">
            <swiper
                :space-between="20"
                :slidesPerView="2.5"
                :initialSlide="isEven ? slides.length - 1 : 0"
                @swiper="onSwiper"
            >
                <swiper-slide
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="!h-[380px] flex"
                >
                    <img :src="slide.url" :alt="index" width="400px" height="380px" class=" object-cover">
                </swiper-slide>
                <div class="flex gap-[10px] p-2 justify-center">
                    <div
                        :id="`custom-prev-${index}`"
                        class="custom-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100"
                        @click="slidePrev"
                    />
                    <div
                        :id="`custom-next-${index}`"
                        class="custom-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center"
                        @click="slideNext"
                    />
                </div>
            </swiper>
        </div>
    </div>
    
    
</template>

<script>
import { Swiper, SwiperSlide, SwiperCore } from 'swiper-vue2';

// Import Swiper styles
import 'swiper/swiper-bundle.css'


export default {
    name: 'TheVariants',
    props: {
        slides: {
            type: Array,
            required: true,
        },
        info: {
            type: Object,
            required: true,
        },
        isEven: {
            type: Boolean,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiper: null,
            currIndex: 0
        }
    },
    methods: {
        onSwiper (swiper) {
            console.log(swiper)
            this.swiper = swiper;
            this.currIndex = swiper.activeIndex;
        },
        slideNext() {
            if (this.currIndex === this.slides.length - 2) {
                this.currIndex = 0
            } else {
                this.currIndex += 1
            }
            this.swiper?.slideTo(this.currIndex) 
        },
        slidePrev() {
            if (this.currIndex === 0) {
                this.currIndex = this.slides.length - 2
            } else {
                this.currIndex -= 1
            }
            this.swiper?.slideTo(this.currIndex) 
        }
    }
}
</script>
<style lang="scss">
    .custom-next{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/arrow-right.png');
            width: 34px;
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
    .custom-prev{
            &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/arrow-right.png');
            width: 34px;
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