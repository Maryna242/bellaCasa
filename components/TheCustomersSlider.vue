<template>
    <div>
        <swiper
            :space-between="20"
            :slidesPerView="3"
            @swiper="onSwiper"
        >
            <swiper-slide
                v-for="(item, index) in slides"
                :key="index"
            >
                <img :src="item.url" :alt="index" width="400px" height="380px" class=" object-cover relative" />
                <button v-if="item.type === 'video'" href="#" class="play hover:bg-white hover:border-4 hover:border-[#F8B1AB] active:border-[#F28B82] top-0 right-1/2 translate-x-1/2 translate-y-[150%] flex w-[115px] h-[115px] items-center border border-[#F8B1AB] bg-[#F8B1AB] rounded-full justify-center absolute transition-colors" />
                <div
                    v-if="item.review"
                    class="union absolute bg-[#F5F5F5] rounded-[32px] top-[287px] px-3 py-4 max-w-[360px] left-[15px]"
                    :class="index % 2 === 0 ? 'union-rotate' : ''"
                >
                    <span class="text-[15px] font-fixel font-light !text-[#000000]" v-html="item.review" />
                </div>
            </swiper-slide>
            <div class="flex gap-[10px] p-2 justify-center">
                <div
                    :id="`custom-prev-${index}`"
                    class="button-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100 transition-colors"
                    @click="slidePrev"
                />
                <div
                    :id="`custom-next-${index}`"
                    class="button-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center transition-colors"
                    @click="slideNext"
                />
            </div>
        </swiper>
    </div>
</template>


<script>
import { Swiper, SwiperSlide, SwiperCore } from 'swiper-vue2';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
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
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/Polygon.webp');
            width: 22.29px;
            height: 26px;
            mask-size: contain;
            background: #FFF;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover{
            &::before {
                background: #F8B1AB;
            }
        }
        &:active{
            &::before {
                background: #F28B82;
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
</style>