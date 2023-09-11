<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto md:px-8 px-4 mb-[60px] md:mb-10 lg:mb-[60px]" id="projects-section">
        <div class="max-w-[1240px] my-0 mx-auto ">
            <h2 class="text-[#4E4747] text-2xl md:text-[28px] lg:text-[32px] font-montserrat font-semibold text-center mb-[60px]">
                {{ $t('projects.titleProjects') }}
            </h2>
            <template 
                v-if="width > 767"
            >
                    <template
                        v-for="(item, index) in items"
                    >
                    <transition
                        name="fade-projects"
                        :key="index"
                    >

                        <the-projects-item
                            v-if="per_page > index"
                            :photo="item.photo"
                            :width="width"
                            :info="item.information"
                        />
                    </transition>
                        
                    </template>
            </template>
            <swiper
                v-else
                class="overflow-hidden max-w-full"
                :slidesPerView="1"
                autoHeight
                :navigation="{nextEl: '.custom-next', prevEl: '.custom-prev'}"
            >
                <swiper-slide
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <the-projects-item
                        :photo="item.photo"
                        :width="width"
                        :info="item.information"
                    />
                </swiper-slide>
                <div class="flex gap-[10px] lg:justify-center justify-end mt-5">
                    <div
                        :id="`custom-prev`"
                        class="custom-prev hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center -scale-x-100"
                    />
                    <div
                        :id="`custom-next`"
                        class="custom-next hover:bg-[#D9D9D9] active:bg-[#BCBCBC] cursor-pointer flex w-[50px] h-[50px] items-center border rounded-full justify-center"
                    />
                </div>
            </swiper>
            <button 
                class="md:block my-0 mx-auto bg-white hidden max-w-[213px] py-3 px-9 rounded text-[#F8B1AB] font-fixel border-2 border-[#F8B1AB] transition colors hover:bg-[#F8B1AB] hover:text-white active:bg-[#F28B82] active:text-white"
                @click="showMore"
            >
                {{per_page < items.length ? $t('projects.button1') : $t('projects.button2') }}
            </button>
        </div>
    </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, SwiperCore  } from 'swiper-vue2';
import TheProjectsItem from './TheProjectsItem.vue'

SwiperCore.use([Navigation]);

export default {
    components: {
        TheProjectsItem,
        Swiper,
        SwiperSlide,
    },
    name: 'TheProjects',
    props: {
        width: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            per_page: 4,
            items: [
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects1/IMG_0253.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0257.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0258.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0259.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0261.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0271.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0274.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0275.webp'
                        },
                        {
                            url:'/img/6_screen/Projects1/IMG_0276.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title1'),
                        subtitle: this.$t('projects.subtitle1'),
                        paragraph: this.$t('projects.paragraph1')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects2/photo_002.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_003.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_008.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_015.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_016.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_018.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_019.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_021.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_032.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_035.webp'
                        },
                        {
                            url:'/img/6_screen/Projects2/photo_036.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title2'),
                        subtitle: this.$t('projects.subtitle2'),
                        paragraph: this.$t('projects.paragraph2')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects3/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/8.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/9.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/10.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/11.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/12.webp'
                        },
                        {
                            url:'/img/6_screen/Projects3/13.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title3'),
                        subtitle: this.$t('projects.subtitle3'),
                        paragraph: this.$t('projects.paragraph3')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects4/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/8.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/9.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/10.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/11.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/12.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/13.webp' 
                        },
                        {
                            url:'/img/6_screen/Projects4/14.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/15.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/16.webp'
                        },
                        {
                            url:'/img/6_screen/Projects4/17.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title4'),
                        subtitle: this.$t('projects.subtitle4'),
                        paragraph: this.$t('projects.paragraph4')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects5/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/8.webp'
                        },
                        {
                            url:'/img/6_screen/Projects5/9.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title5'),
                        subtitle: this.$t('projects.subtitle5'),
                        paragraph: this.$t('projects.paragraph5')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects6/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects6/8.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title6'),
                        subtitle: this.$t('projects.subtitle6'),
                        paragraph: this.$t('projects.paragraph6')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects7/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/8.webp'
                        },
                        {
                            url:'/img/6_screen/Projects7/9.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title7'),
                        subtitle: this.$t('projects.subtitle7'),
                        paragraph: this.$t('projects.paragraph7')
                    }
                },
                {
                    photo:[
                        {
                            url:'/img/6_screen/Projects8/1.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/2.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/3.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/4.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/5.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/6.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/7.webp'
                        },
                        {
                            url:'/img/6_screen/Projects8/IMG_3381.webp'
                        },
                    ],
                    information:{
                        title: this.$t('projects.title8'),
                        subtitle: this.$t('projects.subtitle8'),
                        paragraph: this.$t('projects.paragraph8')
                    }
                },
                
            ]
        }
    },
    methods: {
        showMore() {
            if (this.per_page === this.items.length) {
                this.per_page = 4
            }
            else{
                this.per_page = this.items.length
            }
            
        },
    }
}
</script>
<style lang="scss">
.fade-projects-enter-active, .fade-projects-leave-active {
    transition: opacity .5s ease;
}
.fade-projects-enter, .fade-projects-leave-to{
    opacity: 0;
}
</style>