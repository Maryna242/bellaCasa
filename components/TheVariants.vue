<template>
    <div class=" w-full max-w-[1440px] my-0 mx-auto mt-[140px]">
        <div class="">
            <h2 class="text-center font-[montserrat] text-[32px] font-semibold text-[#4E4747] mb-16">
                Наш світ штор.
                <br>
                Вибір найкращих варіантів для вашого інтер'єру
            </h2>
            <the-variants-item
                v-for="(item, index) in items"
                :key="index"
                :slides="item.slides"
                :info="item.initialInfo"
                :is-even="(index + 1) % 2 === 0"
            />
        </div>
    </div>
</template>

<script>
import TheVariantsItem from './TheVariantsItem.vue'
import TestImg from '~/static/img/hui.png'
export default {
    components: { TheVariantsItem },
    name: 'TheVariants',
    data() {
        return {
            items: [
                {
                    slides: [
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        }
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        }
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        }
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        }
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
                        }
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
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
                            url: TestImg
                        },
                        {
                            url: TestImg
                        },
                        {
                            url: TestImg
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