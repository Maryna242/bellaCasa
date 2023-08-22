<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto ">
        <div class=" max-w-[1240px] my-0 mx-auto md:px-8 px-4 lg:px-2">
            <h2 class=" font-[montserrat] font-semibold text-[32px] text-[#4E4747] text-center mb-[46px]">
                Наші клієнти про нас
            </h2>
            <div class="">

            </div>
            <the-customers-slider
                :slides="slides"
            />
        </div>
    </div>
</template>

<script>

import TheCustomersSlider from './TheCustomersSlider.vue'

    export default {
        name: 'TheCustomers',
        components: { 
            TheCustomersSlider 
        },
        data() {
            return {
                slides:[
                    {
                        url: '/img/customers_1.webp',
                        type: 'video',
                        review: ''
                    },
                    {
                        url: '/img/customers_2.webp',
                        review: "Ми не могли бути щасливішими з нашими новими шторами! <br/> Кожного ранку, коли сонце проникає крізь них, наша кімната заповнюється приємним м'яким світлом. Дякуємо безмежно❤️"
                    },
                    {
                        url: '/img/customers_3.webp',
                        review: 'Завдяки вам наша мрія стала реальністю! Те, що ми бачили на картинках - тепер бачимо щодня! '
                    },
                    {
                        url: '/img/16_screen/4.webp'
                    },
                    {
                        url: '/img/16_screen/5.webp'
                    },
                    {
                        url: '/img/16_screen/6.webp'
                    },
                    {
                        url: '/img/16_screen/7.webp'
                    },
                    {
                        url: '/img/16_screen/8.webp'
                    },
                    {
                        url: '/img/16_screen/9.webp'
                    },

                ]
            }
        }
    }
</script>