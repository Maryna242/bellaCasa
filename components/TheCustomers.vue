<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full max-w-[1440px] my-0 mx-auto " id="customers-section">
        <div class=" max-w-[1240px] my-0 mx-auto md:px-8 px-4 lg:px-2">
            <h2 class=" font-[montserrat] font-semibold text-[32px] text-[#4E4747] text-center mb-[46px]">
                {{ $t('customers.title') }}
            </h2>
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
                        review: this.$t('customers.reviews.title1')
                    },
                    {
                        url: '/img/customers_3.webp',
                        review: this.$t('customers.reviews.title2')
                    },
                    {
                        url: '/img/16_screen/4.webp',
                        review: this.$t('customers.reviews.title3')
                    },
                    {
                        url: '/img/16_screen/5.webp',
                        review: this.$t('customers.reviews.title4')
                    },
                    {
                        url: '/img/16_screen/6.webp',
                        review: this.$t('customers.reviews.title5')
                    },
                    {
                        url: '/img/16_screen/7.webp',
                        review: this.$t('customers.reviews.title6')
                    },
                    {
                        url: '/img/16_screen/8.webp',
                        review: this.$t('customers.reviews.title7')
                    },
                    {
                        url: '/img/16_screen/9.webp',
                        review: this.$t('customers.reviews.title8')
                    },

                ]
            }
        }
    }
</script>