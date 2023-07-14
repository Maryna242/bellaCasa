<template>
    <div class="w-full max-w-[1440px] relative my-0 mx-auto bg-[#0B3B60] before:content-[''] before:bg-mosaic before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[295px]  before:bg-cover before:bg-no-repeat after:content-[''] after:bg-big-logo after:w-[223px] after:h-[269px] after:bg-contain after:absolute after:right-[100px] after:bottom-20 after:z-10">
        <div class="max-w-[1240px] my-0 mx-auto py-2 px-[106px]">
            <div class="flex mb-20">
                <div class=" max-w-[435px]">
                    <h2 class="text-white text-[32px] font-semibold font-[montserrat] pt-20">
                        6 кроків до штор вашої мрії
                    </h2>
                    <ul class="flex flex-col gap-5 mt-12">
                        <li v-for="(item,index) in ourSteps" 
                        :key="index"
                        class="flex"
                        >
                            <span class="text-white p-[30px] text-2xl font-[montserrat] font-semibold bg-[#F8B1AB] flex justify-center items-center w-[60px] h-[60px] rounded-[50px]">
                                {{ index + 1 }}
                            </span>
                            <span class="text-white font-fixel font-normal ml-11 flex items-center">
                                {{ item.text }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheSteps',
        data() {
            return {
                ourSteps: [
                    {
                        text: 'Консультація по телефону або в салоні, попередній розрахунок'
                    },
                    {
                        text: 'Виїзд нашого дизайнера декоратора на заміри'
                    },
                    {
                        text: 'Розрахунок кінцевої вартості'
                    },
                    {
                        text: 'Заключення договору'
                    },
                    {
                        text: 'Виробництво / пошив замовлення в строк 3-14 днів'
                    },
                    {
                        text: 'Доставка і монтаж виробу. Наші майстри найкращі'
                    },
                ]
            }
        }
    }
    
</script>