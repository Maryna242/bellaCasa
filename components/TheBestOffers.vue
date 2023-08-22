<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto py-2 lg:px-[106px] md:px-8 px-4 border-t pt-[60px] md:pt-[80px] lg:pt-[100px]">
            <div class="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
                <div class="lg:gap-10 gap-5 flex flex-col">
                    <h2 class="text-[#4E4747] font-[montserrat] font-semibold text-2xl md:text-[28px] lg:text-[32px]">
                        Щасливі клієнти обожнюють ці моделі
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
                        Ми впевнено можемо сказати, що Bella Casa - це про індивідуальний підхід. Тому чекаємо Вас в нашому шоурумі, де наші найкращі спеціалісти здійснять ваші побажання!
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
import offers_1 from '~/static/img/img_left1.webp'
import offers_2 from '~/static/img/Rectangle_12.webp'
import offers_3 from '~/static/img/img_right1.webp'
import offers_4 from '~/static/img/Rectangle-12.webp'

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
                    title: 'Комплект порт`єри',
                    text1:'Тканина Туреччина',
                    text2:'Карниз KS',
                    text3:'Розмір м (ш/в) - 3 х 2,75',
                    text4:'Під замовлення 5 - 7 днів',
                    text5:'Ціна за штори',
                    price:'4218 ₴',
                    url: offers_1
                },
                {
                    title: 'Комплект порт`єри',
                    text1:'Тканина Голландія',
                    text2:'Карниз KS',
                    text3:'Розмір м (ш/в) - 3 х 2,75',
                    text4:'Під замовлення 5 - 7 днів',
                    text5:'Ціна за штори',
                    price:'8958 ₴',
                    url: offers_2
                },
                {
                    title: 'Комплект порт`єри',
                    text1:'Тканина blackout Туреччина',
                    text2:'Карниз KS',
                    text3:'Розмір м (ш/в) - 3 х 2,75',
                    text4:'Під замовлення 5 - 7 днів',
                    text5:'Ціна за штори',
                    price:'5682 ₴',
                    url: offers_3
                },
                {
                    title: 'Комплект порт`єри',
                    text1:'Тканина Німеччина',
                    text2:'Карниз KS',
                    text3:'Розмір м (ш/в) - 3 х 2,75',
                    text4:'Під замовлення 5 - 7 днів',
                    text5:'Ціна за штори',
                    price:'11478 ₴',
                    url: offers_4
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
