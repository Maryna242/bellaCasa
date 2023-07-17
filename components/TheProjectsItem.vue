<template>
    <div class="flex">
        <div class="">
            <h3 class="font-fixel text-[32px] font-extralight text-[#2B2B2B] mb-6">
                {{ info.title }}
            </h3>
            <span class="font-fixel font-medium text-[#4E4747] text-lg">
                {{ info.subtitle }}
            </span>
            <p class="font-fixel text-[#2B2B2B] text-[15px] font-light pt-3">
                {{ info.paragraph }} 
            </p>
        </div>
        <div class="">
            <swiper
                :space-between="1"
                :slidesPerView="4"
            >
                <swiper-slide
                    v-for="(slide, index) in photo"
                    :key="index"
                    @swiper="onSwiper"
                    :thumbs="{ swiper: thumbsSwiper }"
                >
                    <img :src="slide.url" :alt="index" width="400px" height="380px" class=" object-cover">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, Thumbs  } from 'swiper-vue2';
import 'swiper/swiper-bundle.css'
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
    },
    components: {
        Swiper,
        SwiperSlide,
        Thumbs
    },
    data() {
      return {
        thumbsSwiper: null,
      };
    },
    methods: {
      setThumbsSwiper(swiper) {
        this.thumbsSwiper = swiper;
      },
    },
}
</script>