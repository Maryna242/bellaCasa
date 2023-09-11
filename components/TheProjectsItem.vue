<template>
    <div class="grid md:grid-cols-2 grid-cols-1 md:mb-10 md:gap-5 gap-11">
        <div class="md:max-w-[505px]">
            <h3 class="font-fixel text-xl md:text-[28px] lg:text-[32px] font-extralight text-[#2B2B2B] mb-6">
                {{ info.title }}
            </h3>
            <span class="font-fixel font-medium text-[#4E4747] md:text-lg text-base">
                {{ info.subtitle }}
            </span>
            <p class="font-fixel text-[#2B2B2B] text-[15px] font-normal pt-3">
                {{ info.paragraph }} 
            </p>
        </div>
        <div class="flex lg:flex-row flex-col">
            <div class="lg:max-w-[calc(100%-105px)]">
                <swiper
                    :space-between="1"
                    :navigation="{nextEl: '.item-next', prevEl: '.item-prev'}"
                    class="relative"
                    :thumbs="{ swiper: secondSwiper }"
                    @slideChange="onFirstSliderChange"
                    @swiper="onFirstSwiper"
                >
                    <swiper-slide
                        v-for="(slide, index) in photo"
                        :key="`slide-${index}`"
                        class="!h-[310px] flex"
                    >
                        <NuxtImg
                            :src="slide.url"
                            :alt="`${index}`" 
                            class="w-full object-cover transition cursor-pointer hover-zoom"
                            width="1010"
                            height="620"
                            densities="x1 x2"
                            loading="lazy"
                            @click="openLightBox(index)"
                        />
                    </swiper-slide>
                    <div class="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between z-10 items-center h-0">
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
                    :space-between="20"
                    centeredSlides
                    centeredSlidesBounds
                    @swiper="onSecondSwiper"
                    @slideChange="onSecondSliderChange"
                >
                    <swiper-slide
                        v-for="(slide, index) in photo"
                        :key="`slide-${index}`"
                        class="flex !max-h-[90px] z-50 cursor-pointer borrowing"
                    >
                        <NuxtImg
                            :src="slide.url"
                            :alt="`${index}`" 
                            class="w-full object-cover"
                            width="170"
                            height="180"
                            densities="x1 x2"
                            loading="lazy"
                        />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- <div class="fixed top-0 left-0 right-0 bottom-0 z-[2000] bg-slate-400"></div> -->
            <!-- this component will only be rendered on client-side -->
        <LightBox
            v-if="visible"
            :media="media"
            :start-at="startAt"
            :show-caption="false"
            @onClosed="handleHide"
        >
            <template slot="footer">
                <div class=" !h-0 !p-0"></div>
            </template>
        </LightBox>
    </div>
</template>

<script>
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide, SwiperCore } from 'swiper-vue2';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Thumbs]);
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
        },
        media() {
            return this.photo.map((item) => {
                return {
                    src: item.url,
                    type: 'image',
                    thumb: item.url
                }
            })
        }
    },
    data() {
        return {
            visible: false,
            firstSwiper: null,
            secondSwiper: null,
            startAt: 0,
            firstLoad: true,
            activeSlideIndex: 0,
        };
    },
    methods: {
        onFirstSliderChange(e) {
            console.log(e);
            if (this.secondSwiper && !this.firstLoad) {
                this.secondSwiper.slideTo(e.activeIndex)
            }
            this.firstLoad = false
            this.activeSlideIndex = e.activeIndex;
        },
        onSecondSliderChange(e) {
            console.log(e);
            if (this.firstSwiper && !this.firstLoad) {
                this.firstSwiper.slideTo(e.activeIndex);
            }
            this.firstLoad = false
            this.activeSlideIndex = e.activeIndex;
        },
        onFirstSwiper(swiper) {
            this.firstSwiper = swiper;
        },
        onSecondSwiper(swiper) {
            this.secondSwiper = swiper;
        },
        handleHide() {
            this.visible = false
        },
        openLightBox(index) {
            this.visible = true
            this.startAt = index
        }
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
    .hover-zoom{
        transition: transform 0.5s ease, filter 0.5s ease; 
        &:hover{
            transform: scale(1.1);
            
        }
    }
    .borrowing{
        position: relative;
        z-index: 1;
        transition: filter 0.3s ease;
        // &::before {
        //     content: "";
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     background-color: rgba(0, 0, 0, 0.2); /* Цвет затемнения */
        //     opacity: 0; /* Начальная прозрачность */
        //     transition: opacity 0.3s ease; /* Плавная анимация */
        //     z-index: 0;
        // }
        &:hover{
            filter: brightness(70%);
            &::before{
                opacity: 1;
            }
        }
    }
</style>