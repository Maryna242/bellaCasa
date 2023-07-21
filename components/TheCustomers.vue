<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto p-2 ">
        <div class=" max-w-[1240px] my-0 mx-auto">
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
import Item from '~/static/img/customers_1.png'
import Item1 from '~/static/img/customers_2.png'
import Item2 from '~/static/img/customers_3.png'
    export default {
        name: 'TheCustomers',
        components: { TheCustomersSlider },
        data() {
            return {
                slides:[
                    {
                        url: Item,
                        type: 'video',
                        review: ''
                    },
                    {
                        url: Item1,
                        review: "Ми не могли бути щасливішими з нашими новими шторами! <br/> Кожного ранку, коли сонце проникає крізь них, наша кімната заповнюється приємним м'яким світлом. Дякуємо безмежно❤️"
                    },
                    {
                        url: Item2,
                        review: 'Завдяки вам наша мрія стала реальністю! Те, що ми бачили на картинках - тепер бачимо щодня! '
                    },
                    {
                        url: Item
                    },
                    {
                        url: Item1
                    },
                    {
                        url: Item2
                    }

                ]
            }
        }
    }
</script>