<template>
    <div class="my-[100px]">
        <div class="grid grid-cols-3 gap-[72px]">
            <div class="flex flex-col gap-6">
                <h2 class=" font-[montserrat] font-semibold text-[32px] text-[#4E4747]">
                    Найкрутіші творці затишку та стилю
                </h2>
                <p class=" font-fixel font-normal text-[#2B2B2B]">
                    Наші експерти з дизайну, шиття та монтажу штор об'єднали свої сили, щоб надати вам найкращі послуги 
                    і зробити ваш інтер'єр неповторним.
                </p>
            </div>
            <ul v-for="(item, index) in ourEmployees" 
            class=""
            :key="index"
            >
                <li class="text-center font-fixel">
                    <img :src="item.url" alt="photo" width="295px" height="340px">
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
import Oksana from '~/static/img/Oksana.png'
import Maryna from '~/static/img/Maryna.png'
import Inna_Lilia from '~/static/img/Inna_Lilia.png'
import Lyuda from '~/static/img/Lyuda.png'
import Olga from '~/static/img/Olga.png'
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