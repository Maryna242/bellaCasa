<template>
    <div data-aos="fade-up" data-aos-delay="100" class=" w-full max-w-[1440px] my-0 mx-auto mt-[60px] lg:mt-[140px]" id="variants-section">
        <div class="px-4 md:px-8 lg:px-0">
            <h2 class=" lg:flex lg:flex-col lg:gap-1 block lg:px-0 md:text-center font-montserrat text-2xl md:text-[28px] lg:text-[32px] lg:max-w-full font-semibold text-[#4E4747] mb-5 lg:mb-16">
                <span>
                    Наш світ штор.
                </span>
                <span>
                    Вибір найкращих варіантів для вашого інтер'єру
                </span>
            </h2>
            <the-variants-item
                v-for="(item, index) in items"
                :key="index"
                :slides="item.slides"
                :info="item.initialInfo"
                :index="index"
                :is-even="(index + 1) % 2 === 0"
            />
        </div>
    </div>
</template>

<script>
import TheVariantsItem from './TheVariantsItem.vue'
export default {
    components: { TheVariantsItem },
    name: 'TheVariants',
    data() {
        return {
            items: [
                {
                    slides: [
                        {
                            url: '/img/8_screen/1_automatic_curtains/1frame_at_0m1s.webp',
                            video: '/img/8_screen/1_automatic_curtains/1.mp4',
                            type: 'video',
                        },
                        {
                            url: '/img/8_screen/1_automatic_curtains/2_frame_at_0m0s.webp',
                            video: '/img/8_screen/1_automatic_curtains/2.mp4',
                            type: 'video',
                        },
                        {
                            url: '/img/8_screen/1_automatic_curtains/3frame_at_0m0s.webp',
                            video: '/img/8_screen/1_automatic_curtains/3.mp4',
                            type:'video'
                        },
                        {
                            url: '/img/8_screen/1_automatic_curtains/5frame_at_0m0s.webp',
                            video: '/img/8_screen/1_automatic_curtains/4.mp4',
                            type:'video'
                        },
                        {
                            url: '/img/8_screen/1_automatic_curtains/6.webp',
                            video: '/img/8_screen/1_automatic_curtains/5.mp4',
                            type:'video'
                        },
                    ],
                    initialInfo: {
                        title: 'Автоматичні штори',
                        paragraph: `Ми працюємо з усіма видами автоматичних систем. Наші замовники архітектори все 
                                    більше надають переваги системі Розумний будинок.`,
                        price: 'ціна від 4100 ₴ м / п',
                    }
                },
                {
                    slides: [
                        {
                            url: '/img/8_screen/2_curtains/1-1980x1300.webp'
                        },
                        {
                            url: '/img/8_screen/2_curtains/2-1980x2970.webp'
                        },
                        {
                            url: '/img/8_screen/2_curtains/3.webp'
                        },
                        {
                            url: '/img/8_screen/2_curtains/4.webp'
                        },
                        {
                            url: '/img/8_screen/2_curtains/5.webp'
                        },
                        {
                            url: '/img/8_screen/2_curtains/6_1080 X 1080 (2).webp'
                        },
                    ],
                    initialInfo: {
                        title: 'Штори',
                        paragraph: `Прямі штори - найпопулярніший вид портьєр. 
                                    Завдяки правильному вибору тканини, вони виглядатимуть дуже дорого та порадують власника довговічністю.`,
                        price: 'ціна від 700 ₴ м / п',
                    }
                },
                {
                    slides: [
                        {
                            url: '/img/8_screen/3_roman/1.webp'
                        },
                        {
                            url: '/img/8_screen/3_roman/2.webp'
                        },
                        {
                            url: '/img/8_screen/3_roman/3.webp'
                        },
                        {
                            url: '/img/8_screen/3_roman/4.webp'
                        },
                        {
                            url: '/img/8_screen/3_roman/5.webp'
                        },
                        {
                            url: '/img/8_screen/3_roman/6.webp'
                        },
                    ],
                    initialInfo: {
                        title: 'Римські штори',
                        paragraph: `Чудовий вибір для стильних інтер'єрів. Ідеально рівні полотна легко 
                                    піднімаються - це практичний і функціональний варіант, який навіть у однотонному кольорі виглядає дуже ефектно.
                                    Карниз враховано у вартість.`,
                        price: 'ціна від 1868 ₴ м / кв',
                    }
                },
                {
                    slides: [  
                        {
                            url: '/img/8_screen/4_wooden/1.webp'
                        },
                        {
                            url: '/img/8_screen/4_wooden/2.webp'
                        },
                        {
                            url: '/img/8_screen/4_wooden/3.webp'
                        },
                        {
                            url: '/img/8_screen/4_wooden/4.webp'
                        },
                        {
                            url: '/img/8_screen/4_wooden/5.webp'
                        },
                        {
                            url: '/img/8_screen/4_wooden/6.webp'
                        },
                    ],
                    initialInfo: {
                        title: 'Дерев’яні жалюзі',
                        paragraph: `Естетика. Дерев'яні жалюзі додають теплоти, шарму і природного вигляду до 
                                    будь-якого інтер'єру. Вони створюють природну атмосферу та надають приміщенню 
                                    елегантний і затишний вигляд.`,
                        price: 'ціна від 3470 ₴ м / кв',
                    }
                },
                {
                    slides: [
                        {
                            url: '/img/8_screen/5_roll/1.webp'
                        },
                        {
                            url: '/img/8_screen/5_roll/2.webp'
                        },
                        {
                            url: '/img/8_screen/5_roll/3.webp'
                        },
                        {
                            url: '/img/8_screen/5_roll/4.webp'
                        },
                        {
                            url: '/img/8_screen/5_roll/5.webp'
                        },
                        {
                            url: '/img/8_screen/5_roll/6.webp'
                        },
                    ],
                    initialInfo: {
                        title: 'Рулонні штори',
                        paragraph: `Цей тип штор вирізняється своєю сучасністю та функціональністю. Вони 
                                    дозволяють точно регулювати проникнення світла і забезпечують високий рівень 
                                    приватності.`,
                        price: 'ціна від 510 ₴ м / кв',
                    }
                },
                {
                    slides: [
                        {
                            url: '/img/8_screen/6_eaves/1.webp'
                        },
                        {
                            url: '/img/8_screen/6_eaves/2.webp'
                        },
                        {
                            url: '/img/8_screen/6_eaves/frame_at_0m0s.webp',
                            video: '/img/8_screen/6_eaves/10000000_596616485881485_3106649247181283341_n.mp4',
                            type:'video'
                        }
                    ],
                    initialInfo: {
                        title: 'Карнизи',
                        paragraph: `Підберемо найкращі карнизи під ваші штори. Наприклад, дерев'яні 
                                    карнизи надають приміщенню природного та теплого вигляду. `,
                        price: 'ціна від 250 ₴ м / п',
                    }
                },
                {
                    slides: [
                        {
                            url: '/img/8_screen/7_carpet/1.webp'
                        },
                        {
                            url: '/img/8_screen/7_carpet/2.webp'
                        }
                    ],
                    initialInfo: {
                        title: 'Килимові покриття',
                        paragraph: `Важливий елемент декору. Килими доступні в різних кольорах, візерунках і текстурах, 
                                    що дозволяє вам підібрати варіант, який відповідає вашому інтер'єру та особистому смаку.`,
                        price: 'ціна індивідуальна',
                    }
                }
            ]
        }
    }
}
</script>