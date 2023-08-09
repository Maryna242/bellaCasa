<template>
    <div class="w-full my-[60px] md:my-[80px] lg:my-[100px] p-2 max-w-[1440px] mx-auto relative bg-[#0B3B60] before:content-[''] before:bg-bottom before:bg-mosaic-mob md:before:bg-[initial] md:before:bg-mosaic md:before:bg-cover md:before:top-0 md:before:left-[initial] before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full md:before:max-w-[320px]  before:bg-contain before:bg-no-repeat">
        <div class="max-w-[1240px] my-0 mx-auto px-5 md:px-[42px] lg:px-[111px]">
            <div class="">
                <h2 class="text-white font-semibold font-[montserrat] text-2xl md:text-[28px] lg:text-[32px] text-center mt-10 md:mt-[60px] lg:mt-20 mb-[60px] z-10 relative">
                    Часті запитання від наших клієнтів
                </h2>
                <div class=" mb-20">
                    <ul class="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 ">
                        <li 
                            v-for="(item, index) in ourQuestions"
                            :key="index"
                            class="flex flex-col border-2 border-[#234F70] z-10 p-6 gap-2 flex-wrap"
                        >
                            <span class="font-[montserrat] font-semibold text-2xl md:text-[32px] text-[#F8B1AB]">
                                0{{ index + 1 }}
                            </span>
                            <span class="font-display font-medium text-lg text-white">
                                {{ item.title }}
                            </span>
                            <p class="font-display text-sm md:text-base font-normal text-[#728A9C]">
                                {{ item.text }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheQuestions',
    data() {
        return {
            ourQuestions: [
                {
                    title: 'Як можна замовити штори?',
                    text: 'Ви можете замовити штори зв`язавшись з нашою командою за допомогою телефону або електронної пошти, ще краще завітати до нашого  салону.' 
                },
                {
                    title: 'Скільки часу займає пошив?',
                    text: 'Як правило, для пошиття штор достатньо 3-5 днів. Ми завжди витримуємо обговорені терміни для вашого комфорту.'
                },
                {
                    title: 'Ви встановлюєте штори?',
                    text: 'Так, ми надаємо послуги професійного встановлення штор. Наші майстри займуться правильним монтажем, щоб штори виглядали бездоганно!'
                },
                {
                    title: 'Якщо я зовсім не розумію в дизайні, як замовити штори?',
                    text: 'Наша команда має дизайнерську освіту, тому можете впевнено разраховувати на нас! Ми знаємо, який стиль штор підійде саме вам.'
                },
                {
                    title: 'В яких містах ви працюєте, і чи є гарантія?',
                    text: 'Ми працюємо по всій Україні 🇺🇦 Надаємо гарантію 12 місяців на автоматичні механізми.  '
                },
                {
                    title: 'Монтажники прибирають після себе?',
                    text: 'Обов’язково. Наші працівники працюють тільки в білих рукавицях, та після монтажу ретельно прибирають за собою.'
                }
            ]
        }
    }
}
</script>