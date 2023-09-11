<template>
    <div
        data-aos="fade-up" data-aos-delay="100"
        class="flex gap-5 lg:flex-row flex-col mb-16"
        :class=" isEven ? ' lg:pr-[100px]' : 'lg:pl-[100px]'"
    >
        <div 
            class="lg:w-1/4 flex items-center"
            :class=" isEven ? ' lg:order-1' : '' "
        >
            <div class="flex flex-col gap-6 md:max-w-[520px] lg:max-w-full">
                <h3 class="font-fixel text-[32px] text-[#4E4747] font-extralight">
                    {{ info.title }}
                </h3>
                <p class="font-fixel text-[15px] text-[#2B2B2B] font-normal border-b pb-5 max-w-[400px]">
                    {{ info.paragraph }}
                </p>
                <span class="font-fixel text-[#2B2B2B] font-medium text-lg">
                    {{ info.price }}
                </span>
            </div>
        </div>
        <div class=" lg:w-3/4">
            <swiper
                :breakpoints="breakpoints"
                :pagination="{el: '.dots', clickable: true}"
                :navigation="{nextEl: '.custom-next', prevEl: '.custom-prev'}"
                @swiper="onSwiper"
            >
                <swiper-slide
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="!h-[380px] flex w-[342px]"
                >
                    <TheVariantsItemSlide
                        :slide="slide"
                        :index="index"
                    />
                </swiper-slide>
                <div
                    class="flex items-center flex-row-reverse gap-[30px]"
                    :class=" isEven ? 'lg:pl-[200px] justify-end' : 'lg:pr-[200px]'"
                >
                    <div v-if="showNavigation(slides.length)" class="flex gap-[10px] pt-2 lg:justify-center justify-end">
                        <div
                            :id="`custom-prev`"
                            class="custom-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100"
                        />
                        <div
                            :id="`custom-next`"
                            class="custom-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center"
                        />
                    </div>
                    <div class="dots"/>
                </div>
                
            </swiper>
        </div>
    </div>
    
    
</template>

<script>
import { Pagination, Navigation } from 'swiper'
// import SwiperCore, { Controller } from 'swiper';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';
import TheVariantsItemSlide from './TheVariantsItemSlide.vue';
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination, Navigation]);
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
        TheVariantsItemSlide,
    },
    computed:{
        breakpoints() {
            return {
                375: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                440: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                900: {
                    spaceBetween: 20,
                    slidesPerView: 2.5
                }
            }
        }
    },
    data() {
        return {
            swiper: null,
            // currIndex: 0,
            width: 0,
            // showVideo: false,
            // dotsCount: 0,
        }
    },
    methods: {
        onSwiper (swiper) {
            this.swiper = swiper;
            // this.currIndex = swiper.activeIndex;
        },
        updateWidth(){
            this.width = window.innerWidth      
        },
        showNavigation(length){
            if(this.width < 440){
                return length > 1.5
            } else if(this.width < 768){
                return length > 1
            } else if (this.width < 900) {
                return length > 2
            }
            else{
               return length > 2.5
            }
        },
    },
    mounted(){
        this.updateWidth()
        window.addEventListener('resize', this.updateWidth)
        if (this.isEven) {
            this.swiper?.slideTo(this.slides.length) 
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth)
    }
}
</script>
<style lang="scss">
    .custom-next{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/arrow-right.webp');
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
            mask-image: url('~/static/img/arrow-right.webp');
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
.dots {
    display: flex;
    gap: 4px;
    align-items: center;
    >.swiper-pagination-bullet {
        position: relative;
        display: block;
        width: 18px;
        height: 18px;
        background: transparent;
        border-radius: 100px;
        opacity: 1;
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background:#D9D9D9;
            border-radius: 100px;
        }
        &-active {
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                border: 1px solid #D9D9D9;
                border-radius: 100px;
            }
        }
    }
}
</style>