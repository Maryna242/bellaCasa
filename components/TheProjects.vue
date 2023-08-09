<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto p-2">
        <div class="max-w-[1240px] my-0 mx-auto  mt-[100px]">
            <h2 class="text-[#4E4747] text-[32px] font-[montserrat] font-semibold text-center mb-[60px]">
                Проекти
            </h2>
            <the-projects-item
            v-for="(item, index) in items"
            :key="index"
            :photo="item.photo"
            :info="item.information"
            />
        </div>
    </div>
</template>

<script>
import TheProjectsItem from './TheProjectsItem.vue'
import TestImg from '~/static/img/img_left.webp'
export default {
    components: { TheProjectsItem },
    name: 'TheProjects',
    data() {
        return {
            items: [
                {
                    photo:[
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
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
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        },
                        {
                            url:TestImg
                        }
                    ],
                    information:{
                        title:'Текстильна класика',
                        subtitle:'Магія декору',
                        paragraph:'При створенні текстильного дизайну важливо витримати загальну концепцію. В цьому проекті для підтримки стриманого настрою, разом з архітектором  ми обрали класичний варіант порт`єр.'
                    }
                },
                
            ]
        }
    }
}
</script>