<template>
    <div>
        <swiper
            :breakpoints="breakpoints"
            :pagination="{el: '.dots', clickable: true}"
            :navigation="{nextEl: '.button-next', prevEl: '.button-prev'}"
            @swiper="onSwiper"
        >
            <swiper-slide
                v-for="(item, index) in slides"
                :key="index"
            >
                <the-customers-slider-slide
                    :item="item"
                    :index="index"
                />
            </swiper-slide>
            <div class="flex items-center flex-row-reverse gap-[30px] justify-center">
                <div class="flex gap-[10px] p-2 justify-center">
                    <div
                        class="button-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100 transition-colors"
                    />
                    <div
                        class="button-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center transition-colors"
                    />
                </div>
                <div class="dots"/>
            </div>
        </swiper>
    </div>
</template>


<script>
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide, SwiperCore } from 'swiper-vue2';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Pagination, Navigation]);
export default {
    name: 'TheCustomersSlider',
    props:{
        slides: {
            type: Array,
            required: true,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
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
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }, 
                850: {
                    slidesPerView: 2.5,
                    spaceBetween: 20
                },
                1000: {
                    spaceBetween: 20,
                    slidesPerView: 3
                }
            }
        }
    },
    data() {
        return {
            swiper: null,
            currIndex: 0,
        }
    },
    methods: {
        onSwiper (swiper) {
            this.swiper = swiper;
            this.currIndex = swiper.activeIndex;
        },
    }
}
</script>
<style lang="scss">
    .button-next{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/arrow-right.webp');
            width: 34px;
            height: 24px;
            background: #D9D9D9;
            mask-size: contain;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        &:hover{
            &::before {
                background: #FFF;
            }
        }
    }
    .button-prev{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/arrow-right.webp');
            width: 34px;
            height: 24px;
            background: #D9D9D9;
            mask-size: contain;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover{
            &::before {
                background: #FFF;
            }
        }
    }
    .play{
        width: 115px;
        min-width: 115px;
        position: absolute;
        transition: .3s ease-in-out;
        background: #F8B1AB;
        &::before{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "";
            display: block;
            mask-image: url('~/static/img/Polygon.webp');
            width: 22.29px;
            height: 26px;
            mask-size: contain;
            background: #FFF;
            transition: .3s ease-in-out;
            z-index: 1;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 4px solid #fff;
            opacity: 0;
            border-radius: inherit;
            transform: scale(.8);
            transition: .3s ease-in-out;
        }
        &:hover{
            &::before {
                background: #F8B1AB;
            }
            &::after {
                opacity: 1;
                transform: scale(1);
                background-color: #fff;
                border-color: #F8B1AB;
            }
        }
        &:active{
            &::before {
                background: #F28B82;
            }
            &::after {
                border-color: #F28B82;
            }
        }
    }
    .union{
        &::after{
            content: "";
            background-image: url('~/static/img/Frame_217.webp');
            width: 26px;
            height: 23px;
            display: block;
            position: absolute;
            right: 20px;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &::before{
            content: "";
            position: absolute;
            display: block;
            width: 45px;
            height: 25px;
            background: #f5f5f5;
            top: 0;
            right: 70px;
            transform: translateY(calc(-100% + 1px));
            clip-path: polygon(0 100%, 100% 100%, 100% 0);
        }
        &-rotate {
            bottom: initial;
            top: 40px;
            &::before {
                transform: translateY(calc(100% - 1px)) rotate(180deg);
                right: initial;
                top: initial;
                bottom: 0;
                left: 70px;
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