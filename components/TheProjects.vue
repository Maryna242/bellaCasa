<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto md:px-8 px-4 mb-[60px] md:mb-10 lg:mb-[60px]">
        <div class="max-w-[1240px] my-0 mx-auto ">
            <h2 class="text-[#4E4747] text-2xl md:text-[28px] lg:text-[32px] font-[montserrat] font-semibold text-center mb-[60px]">
                Проекти
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
                <div class="flex gap-[10px] lg:justify-center justify-end">
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
                class="md:block my-0 mx-auto bg-white hidden max-w-[213px] py-3 px-9 rounded text-[#F8B1AB] font-fixel font-semibold border-2 border-[#F8B1AB] transition colors hover:bg-[#F8B1AB] hover:text-white active:bg-[#F28B82] active:text-white"
                @click="showMore"
            >
                    {{per_page < items.length ? 'Показати більше' : 'Скрити'}}
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
                        title:'Функціональна естетика',
                        subtitle:'Елегантні рішення для вікон',
                        paragraph:'Важливим критерієм для наших замовників є практичність. Завдяки нашому досвіду, ми створили гармонічне поєднання функціоналу та стилю.'
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
                        title:'Стиль і сучасність',
                        subtitle:'Автоматизовані штори для спальні',
                        paragraph:'В цьому проекті ми поєднали елегантний дизайн з передовими технологіями, щоб створити автоматизовану систему, яка привнесла новий рівень зручності і функціональності в приміщення.'
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
                        title:'Затишок та відпочинок',
                        subtitle:'Рішення для ванної кімнати',
                        paragraph:'Римська штора - ідеальний варіант, щоб делікатно додати декор та зберегти практичність простору.'
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
                        title:'Драпірування мрій',
                        subtitle:'Затишна вітальня',
                        paragraph:'Ми розробляли та втілювали оригінальні концепції дизайну, використовуючи різні техніки і декоративні елементи. Наша команда пишається результатами цього проекту!'
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
                        title:'Місце сили',
                        subtitle:'Натуральні тканини в інтер`єрі',
                        paragraph:'При створені цього проекта були використані тільки натуральні матеріали та текстури, що створюють затишок та відчуття гармонії з природою.'
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
                        title:'Dasha Space',
                        subtitle:'Текстиль для дитячої кімнати',
                        paragraph:'Штори в дитячу - це не завжди про акцентні тканини. Нашою головною задачею було підтримати яскравий дизайн та зберегти відчуття спокою.'
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
                        title:'Стиль і функціональність',
                        subtitle:'Штори, які вражають',
                        paragraph:'Кольорову палітру світлих відтінків підказали нам шпалери, меблі та призначення кімнати. Штори білого кольору - просто розчиняються в інте`єрі та надають відчуття легкості та свіжості.'
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
                        title:'Текстильна класика',
                        subtitle:'Магія декору',
                        paragraph:'При створенні текстильного дизайну важливо витримати загальну концепцію. В цьому проекті для підтримки стриманого настрою, разом з архітектором  ми обрали класичний варіант порт`єр.'
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