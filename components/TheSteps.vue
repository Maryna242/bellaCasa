<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full p-2 max-w-[1440px] relative my-0 mx-auto bg-[#0B3B60] before:content-[''] before:bg-bottom before:bg-mosaic-mob md:before:bg-[initial] md:before:bg-mosaic md:before:bg-cover md:before:top-0 md:before:left-[initial] before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full md:before:max-w-[295px]  before:bg-contain before:bg-no-repeat after:content-[''] after:bg-big-logo after:w-[94px] after:h-[114px] md:after:w-[158px] md:after:h-[191px] lg:after:w-[223px] lg:after:h-[269px] after:bg-contain after:absolute after:right-[25px] after:bottom-[45px] lg:after:right-[100px] lg:after:bottom-20 after:z-10">
        <div class="max-w-[1240px] my-0 mx-auto px-4 md:px-8 lg:px-[106px]">
            <div class="flex mb-[150px] md:mb-[60px] lg:mb-20">
                <div class=" max-w-[435px]">
                    <h2 class="text-white text-2xl md:text-[28px] lg:text-[32px] font-semibold font-[montserrat] pt-10 md:pt-[60px] lg:pt-20">
                        6 кроків до штор вашої мрії
                    </h2>
                    <ul class="flex flex-col gap-4 mt-5 md:mt-10 lg:mt-12">
                        <li v-for="(item,index) in ourSteps" 
                        :key="index"
                        class="flex z-10"
                        >
                            <span class="text-white p-[30px] text-xl md:text-2xl font-[montserrat] font-semibold bg-[#F8B1AB] flex justify-center items-center w-[60px] h-[60px] rounded-[50px]">
                                {{ index + 1 }}
                            </span>
                            <span class="text-white font-fixel text-sm md:text-base font-normal ml-11 flex items-center">
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