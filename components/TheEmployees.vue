<template>
    <div data-aos="fade-up" data-aos-delay="100" class=" mt-[60px] md:mt-[80px] lg:mt-[100px]">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[72px] md:gap-y-10 lg:grid-cols-3 lg:gap-x-[72px] lg:gap-y-12">
            <div class="flex flex-col gap-6">
                <h2 class=" font-montserrat font-semibold text-2xl md:text-[28px] lg:text-[32px] text-[#4E4747]">
                    {{ $t('employees.title') }}
                </h2>
                <p class=" font-fixel font-normal text-sm md:text-base text-[#2B2B2B]">
                    {{ $t('employees.subtitle') }}
                </p>
            </div>
            <ul v-for="(item, index) in ourEmployees" 
            class=""
            :key="index"
            >
                <li class="text-center font-fixel flex flex-col items-center">
                    <div class="flex sm:max-h-[340px] max-h-[215px] max-w-[343px] overflow-hidden">
                        <NuxtImg
                            :src="item.url"
                            alt="photo"
                            class="object-cover object-top w-full h-auto transition hover-zoom"
                            width="590"
                            height="680"
                        />
                    </div>
                    <div class=" mt-3 mb-1 font-semibold text-lg text-[#2B2B2B]">
                        {{ item.name }}
                    </div>
                    <div class=" border-b pb-3 border-[#D9D9D9] text-[15px] text-[#2B2B2B]">
                        {{ item.title }}
                    </div>
                    <div class="mt-2  text-[#4E4747] text-[15px]">
                        {{ item.city }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheEmployees',
    data(){
        return{
            ourEmployees:[
                {
                    url: '/img/Oksana.webp',
                    name: this.$t('employees.name.title1'),
                    title: this.$t('employees.name.subtitle1'),
                    city: this.$t('employees.name.city1'),
                },
                {
                    url: '/img/Maryna.webp',
                    name: this.$t('employees.name.title2'),
                    title: this.$t('employees.name.subtitle2'),
                    city: this.$t('employees.name.city1'),
                },
                {
                    url: '/img/Inna_Lilia.webp',
                    name: this.$t('employees.name.title3'),
                    title: this.$t('employees.name.subtitle3'),
                    city: this.$t('employees.name.city2'),
                },
                {
                    url: '/img/Lyuda.webp',
                    name: this.$t('employees.name.title4'),
                    title: this.$t('employees.name.subtitle4'),
                    city: this.$t('employees.name.city2'),
                },
                {
                    url: '/img/Olga.webp',
                    name: this.$t('employees.name.title5'),
                    title: this.$t('employees.name.subtitle2'),
                    city: this.$t('employees.name.city3'),
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.hover-zoom{
    transition: transform 0.5s ease, filter 0.5s ease; 
    &:hover{
        transform: scale(1.1);
        
    }
}
</style>