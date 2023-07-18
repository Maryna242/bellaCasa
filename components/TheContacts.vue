<template>
    <div class="w-full max-w-[1440px] p-2 my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto pl-[113px]">
            <div class="flex gap-10">
                <div class="">
                    <h2 class="font-[montserrat] font-semibold text-[32px] text-[#4E4747] mb-[62px]">
                        Контакти
                    </h2>
                    <ul class="flex flex-col gap-[47px]">
                        <template v-for="(item, index) in ourContacts">
                            <li v-if="index === ourContacts.length - 1"
                                :key="index"
                                class="flex flex-col"
                            >
                                <span class="font-fixel text-lg text-[#2B2B2B] font-medium">
                                {{ item.city }}
                                </span>
                                <span class="font-fixel font-normal text-[#4E4747]">
                                    {{ item.street }}
                                </span>
                                <span class="font-fixel font-normal text-[#4E4747]">
                                    {{ item.telephone }}
                                </span>
                            </li>
                            <li
                                v-else
                                :key="index"
                                class="flex flex-col"
                            >
                                <span class="font-fixel text-lg text-[#2B2B2B] font-medium">
                                {{ item.city }}
                                </span>
                                <span class="font-fixel text-lg text-[#2B2B2B] font-medium">
                                    {{ item.street }}
                                </span>
                                <span class="font-fixel font-normal text-[#4E4747]">
                                    {{ item.telephone }}
                                </span>
                                <a href="#" class="font-fixel font-normal text-[#757575] flex">
                                    {{ item.map }} <img src="../static/img/arrow-up-right.png" alt="img" width="24px" height="24px">
                                </a>
                            </li>
                        </template>
                        
                    </ul>
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-end">
                        <p class="font-fixel text-[#2B2B2B] font-normal max-w-[400px] mb-6 pt-1">
                            Запрошуємо до нас в салон переглянути зразки тканей, отримати консультацію спеціаліста та 
                            прорахувати вартість готового виробу.
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <img src="~/static/img/Rectangle_left.png" alt="img" width="400px" height="400px">
                        <img src="~/static/img/Rectangle_right.png" alt="img" width="400px" height="400px">
                    </div>
                    <div class="flex justify-between mt-auto">
                        <div class="flex flex-col justify-start mt-2">
                            <span class=" font-fixel font-medium text-lg text-[#2B2B2B]">
                                Зв’язатись з нами:
                            </span>
                            <a href="mailto:bellacasa.kyiv@gmail.com">
                                bellacasa.kyiv@gmail.com
                            </a>
                        </div>
                        <div class="flex gap-5">
                            <a href="#" class="facebook flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center">

                            </a>
                            <a href="#" class="instagram flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheContacts',
    data(){
        return{
            ourContacts:[
                {
                    city:'м. Київ ',
                    street:'вул. Передславинська 55А',
                    telephone:'+38 096 1353 553',
                    map:'подивитись на карті',
                },
                {
                    city:'м. Дніпро',
                    street:'вул. Михайла Грушевського 12 ',
                    telephone:'+38 067 9714 864',
                    map:'подивитись на карті',
                },
                {
                    city:'м. Кам’янське',
                    street:'пр. Тараса Шевченка 20',
                    telephone:'+38 097 2883 648',
                    map:'подивитись на карті',
                },
                {
                    city:'Графік роботи:',
                    street:'Пн - Пт 10:00 - 19:00',
                    telephone:'Сб 10:00 - 17:00',
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    .facebook::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/facebook.png');
        width: 13.5px;
        height: 27px;
        mask-size: contain;
        background: #F8B1AB;
    }
    .instagram::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/instagram.png');
        width: 28px;
        height: 28px;
        background: #F8B1AB;
        mask-size: contain;
    }
</style>