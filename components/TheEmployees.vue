<template>
    <div class=" mt-[60px] md:mt-[80px] lg:mt-[100px]">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[72px] md:gap-y-10 lg:grid-cols-3 lg:gap-x-[72px] lg:gap-y-12">
            <div class="flex flex-col gap-6">
                <h2 class=" font-[montserrat] font-semibold text-2xl md:text-[28px] lg:text-[32px] text-[#4E4747]">
                    Найкрутіші творці затишку та стилю
                </h2>
                <p class=" font-fixel font-normal text-sm md:text-base text-[#2B2B2B]">
                    Наші експерти з дизайну, шиття та монтажу штор об'єднали свої сили, щоб надати вам найкращі послуги 
                    і зробити ваш інтер'єр неповторним.
                </p>
            </div>
            <ul v-for="(item, index) in ourEmployees" 
            class=""
            :key="index"
            >
                <li class="text-center font-fixel flex flex-col items-center">
                    <div class="flex sm:max-h-[340px] max-h-[215px] max-w-[343px]">
                        <img :src="item.url" alt="photo" class="object-cover object-top w-full h-auto" width="295" height="340"/>
                    </div>
                    <div class=" mt-3 mb-1 font-medium text-lg text-[#2B2B2B]">
                        {{ item.name }}
                    </div>
                    <div class=" border-b pb-3 border-[#D9D9D9] font-light text-[15px] text-[#2B2B2B]">
                        {{ item.title }}
                    </div>
                    <div class="mt-2 font-light text-[#4E4747] text-[15px]">
                        {{ item.city }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Oksana from '~/static/img/Oksana.webp'
import Maryna from '~/static/img/Maryna.webp'
import Inna_Lilia from '~/static/img/Inna_Lilia.webp'
import Lyuda from '~/static/img/Lyuda.webp'
import Olga from '~/static/img/Olga.webp'
export default {
    name: 'TheEmployees',
    data(){
        return{
            ourEmployees:[
                {
                    url: Oksana,
                    name:'Оксана',
                    title: 'управляюча, координатор проектів ',
                    city: 'м. Кам’янське',
                },
                {
                    url: Maryna,
                    name: 'Оксана',
                    title: 'головний дизайнер декоратор ',
                    city: 'м. Кам’янське',
                },
                {
                    url: Inna_Lilia,
                    name: 'Інна та Лілія',
                    title: 'дизайнери декоратори ',
                    city: 'м. Київ',
                },
                {
                    url: Lyuda,
                    name: 'Людмила',
                    title: 'головний технолог ',
                    city: 'м. Київ',
                },
                {
                    url: Olga,
                    name: 'Ольга',
                    title: 'головний дизайнер декоратор ',
                    city: 'м. Дніпро',
                },
            ]
        }
    }
}
</script>