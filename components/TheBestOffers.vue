<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto py-2 lg:px-[106px] md:px-8 px-4 border-t pt-[60px] md:pt-[80px] lg:pt-[100px]">
            <div class="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
                <div class="lg:gap-10 gap-5 flex flex-col">
                    <h2 class="text-[#4E4747] font-montserrat font-semibold text-2xl md:text-[28px] lg:text-[32px]">
                        {{ $t('theBestOffers.title') }}
                    </h2>
                    <template v-if="!mobileViewPort">
                        <the-best-offers-item
                            v-for="(item, index) in ourBestOffers.slice(0, 2)"
                            :key="index"
                            :item="item"
                        />
                    </template>
                </div>
                <swiper
                    v-if="mobileViewPort"
                    class="max-w-full relative !pb-[70px]"
                    :slidesPerView="1"
                    :navigation="{nextEl: '.best-next', prevEl: '.best-prev'}"
                >
                    <swiper-slide
                        v-for="(item, index) in ourBestOffers"
                        :key="index"
                    >
                        <the-best-offers-item
                            :key="index"
                            :item="item"
                        />
                    </swiper-slide>
                    <div class="flex gap-[10px] lg:justify-center justify-end absolute bottom-0 left-0 right-0">
                        <div
                            :id="`best-prev`"
                            class="best-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100"
                        />
                        <div
                            :id="`best-next`"
                            class="best-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center"
                        />
                    </div>
                </swiper>
                <div class="lg:gap-10 gap-5 flex flex-col">
                    <template v-if="!mobileViewPort">
                        <the-best-offers-item
                            v-for="(item, index) in ourBestOffers.slice(2)"
                            :key="index"
                            :item="item"
                        />
                    </template>
                    <p class="font-fixel text-sm lg:text-[15px] font-normal text-[#2B2B2B] mt-auto   ">
                        {{ $t('theBestOffers.text') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, SwiperCore  } from 'swiper-vue2';
import TheBestOffersItem from './TheBestOffersItem.vue'

SwiperCore.use([Navigation]);

export default {
    name: 'TheBestOffers',
    components: {
        Swiper,
        TheBestOffersItem,
        SwiperSlide,
    },
    props: {
        width: {
            type: Number,
            required: true
        }
    },
    computed: {
        mobileViewPort() {
            return this.width < 767
        }
    },
    data(){
        return{
            ourBestOffers: [
                {
                    title: this.$t('theBestOffers.subtitle'),
                    text1:this.$t('theBestOffers.paragraph.span1'),
                    text2:this.$t('theBestOffers.spanKS'),
                    text3:this.$t('theBestOffers.paragraph.span2'),
                    text4:this.$t('theBestOffers.span5-7'),
                    text5:this.$t('theBestOffers.price'),
                    price:'4218 ₴',
                    url: '/img/bestoffers/1.JPG'
                },
                {
                    title: this.$t('theBestOffers.subtitle'),
                    text1:this.$t('theBestOffers.paragraph.span3'),
                    text2:this.$t('theBestOffers.spanKS'),
                    text3:this.$t('theBestOffers.paragraph.span4'),
                    text4:this.$t('theBestOffers.span5-7'),
                    text5:this.$t('theBestOffers.price'),
                    price:'8958 ₴',
                    url: '/img/bestoffers/2.JPG'
                },
                {
                    title: this.$t('theBestOffers.subtitle'),
                    text1:this.$t('theBestOffers.paragraph.span5'),
                    text2:this.$t('theBestOffers.spanKS'),
                    text3:this.$t('theBestOffers.paragraph.span6'),
                    text4:this.$t('theBestOffers.span5-7'),
                    text5:this.$t('theBestOffers.price'),
                    price:'5682 ₴',
                    url: '/img/bestoffers/3.jpeg'
                },
                {
                    title: this.$t('theBestOffers.subtitle'),
                    text1:this.$t('theBestOffers.paragraph.span7'),
                    text2:this.$t('theBestOffers.spanKS'),
                    text3:this.$t('theBestOffers.paragraph.span8'),
                    text4:this.$t('theBestOffers.span5-7'),
                    text5:this.$t('theBestOffers.price'),
                    price:'11478 ₴',
                    url: '/img/bestoffers/4.JPG'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.best-next{
    &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/arrow-right.webp');
        mask-repeat: no-repeat;
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
.best-prev{
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
</style>
