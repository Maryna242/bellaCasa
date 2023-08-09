<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto px-4 md:px-8 lg:pl-[113px]">
            <div class="my-contacts">
                <h2 class="my-contacts-title font-[montserrat] font-semibold text-2xl md:text-[28px] lg:text-[32px] text-[#4E4747]">
                    Контакти
                </h2>
                <template v-for="(item, index) in ourContacts">
                    <div
                        :key="index"
                        class="flex flex-col"
                        :class="`my-contacts-${item.class}`"
                    >
                        <span class="font-fixel text-lg text-[#2B2B2B] font-medium">
                        {{ item.city }}
                        </span>
                        <span class="font-fixel font-normal text-[#4E4747]">
                            {{ item.street }}
                        </span>
                        <a v-if="item.map" :href="item.mapLink" class="font-fixel text-sm md:text-base font-normal text-[#757575] flex">
                            {{ item.map }} <img src="~/static/img/arrow-up-right.webp" alt="img" width="24px" height="24px">
                        </a>

                        <a v-if="item.telephone" :href="`tel:${item.phoneLink}`" class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                            {{ item.telephone }}
                        </a>
                        <span v-if="item.content" class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                            {{ item.content }}
                        </span>
                    </div>
                </template>
                <p class="font-fixel text-[#2B2B2B] font-normal max-w-[400px] pt-1 my-contacts-description">
                    Запрошуємо до нас в салон переглянути зразки тканей, отримати консультацію спеціаліста та 
                    прорахувати вартість готового виробу.
                </p>
                <div class="my-contacts-photofirst flex">
                    <img src="~/static/img/Rectangle_left.webp" class=" object-cover" alt="img" width="400px" height="400px">
                </div>
                <div class="my-contacts-photosecond flex">
                    <img src="~/static/img/Rectangle_right.webp" class=" object-cover" alt="img" width="400px" height="400px">
                </div>
                <div class="flex flex-col justify-start mt-2 my-contacts-callback">
                    <span class=" font-fixel font-medium text-lg text-[#2B2B2B]">
                        Зв’язатись з нами:
                    </span>
                    <a href="mailto:bellacasa.kyiv@gmail.com">
                        bellacasa.kyiv@gmail.com
                    </a>
                </div>
                <div class="flex gap-5 my-contacts-socials">
                    <a href="#" class="facebook flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center hover:bg-[#F8B1AB] active:bg-[#F28B82] transition-colors">

                    </a>
                    <a href="#" class="instagram flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center hover:bg-[#F8B1AB] active:bg-[#F28B82] transition-colors">

                    </a>
                </div>
                <!-- <ul class="flex flex-col gap-10 lg:gap-[47px]">
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
                            <span class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
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
                            <span class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                                {{ item.telephone }}
                            </span>
                            <a href="#" class="font-fixel text-sm md:text-base font-normal text-[#757575] flex">
                                {{ item.map }} <img src="../static/img/arrow-up-right.png" alt="img" width="24px" height="24px">
                            </a>
                        </li>
                    </template>
                </ul> -->
            </div>
            <!-- <div class="flex flex-col">
                <div class="hidden md:flex md:justify-end">
                    <p class="font-fixel text-[#2B2B2B] font-normal max-w-[400px] mb-6 pt-1">
                        Запрошуємо до нас в салон переглянути зразки тканей, отримати консультацію спеціаліста та 
                        прорахувати вартість готового виробу.
                    </p>
                </div>
                <div class="flex md:flex-col md:gap-5 gap-4 relative bottom-[70px]">
                    <div>
                        <img src="~/static/img/Rectangle_left.png" class="" alt="img" width="400px" height="400px">
                    </div>
                    <div>
                        <img src="~/static/img/Rectangle_right.png" class="" alt="img" width="400px" height="400px">
                    </div>
                </div>
                <div
                class="flex md:flex-col justify-between mt-auto md:order-last -order-last"
                >
                    <div class="flex flex-col justify-start mt-2">
                        <span class=" font-fixel font-medium text-lg text-[#2B2B2B]">
                            Зв’язатись з нами:
                        </span>
                        <a href="mailto:bellacasa.kyiv@gmail.com">
                            bellacasa.kyiv@gmail.com
                        </a>
                    </div>
                    <div class="flex flex-col md:flex-row gap-5 relative bottom-[126px]">
                        <a href="#" class="facebook flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center">

                        </a>
                        <a href="#" class="instagram flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center">

                        </a>
                    </div>
                </div>
            </div> -->
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
                    phoneLink:'+380961353553',
                    map:'подивитись на карті',
                    mapLink: 'https://goo.gl/maps/Hd2haJLxeWaZR3aDA',
                    class: 'contact-1'
                },
                {
                    city:'м. Дніпро',
                    street:'вул. Михайла Грушевського 12 ',
                    telephone:'+38 067 9714 864',
                    phoneLink:'+380679714864',
                    map:'подивитись на карті',
                    mapLink: '#',
                    class: 'contact-2'
                },
                {
                    city:'м. Кам’янське',
                    street:'пр. Тараса Шевченка 20',
                    telephone:'+38 097 2883 648',
                    phoneLink:'+380972883648',
                    map:'подивитись на карті',
                    mapLink: '# ',
                    class: 'contact-3'
                },
                {
                    city:'Графік роботи:',
                    street:'Пн - Пт 10:00 - 19:00',
                    content:'Сб 10:00 - 17:00',
                    class: 'contact-4'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    .facebook{
        &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/facebook.webp');
        width: 13.5px;
        height: 26px;
        mask-size: contain;
        background: #F8B1AB;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover {
            &::before {
                background: #fff;
            }
        }
        &:active{
            &::before{
                background: #FFF;
            }
        }
    }
       
    
    .instagram{
        &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/instagram.webp');
        width: 28px;
        height: 28px;
        background: #F8B1AB;
        mask-size: contain;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover {
            &::before {
                background: #FFF;
            }
        }
        &:active{
            &::before{
                background: #FFF;
            }
        }
    }
        
    
    .my-contacts {
        display: grid;
        grid-template-columns: minmax(200px, 275px) 1fr 1fr;
        gap: 25px 20px;
        grid-template-areas: "title title description"
            "contact-1 photofirst photosecond"
            'contact-2 photofirst photosecond'
            'contact-3 photofirst photosecond'
            'contact-4 callback socials';
            @media (max-width: 1024px) {
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                grid-template-areas: "title description"
                "contact-1 photofirst"
                'contact-2 photofirst'
                'contact-3 photofirst'
                'contact-4 photosecond'
                'callback photosecond'
                'socials photosecond';
            }
            @media (max-width: 640px) {
                grid-template-columns: repeat(6, 1fr);
                gap: 20px;
                grid-template-areas: "title title title title title title"
                "contact-1 contact-1 contact-1 contact-1 contact-1 contact-1"
                'contact-2 contact-2 contact-2 contact-2 contact-2 contact-2'
                'contact-3 contact-3 contact-3 contact-3 contact-3 contact-3'
                'contact-4 contact-4 contact-4 contact-4 socials socials'
                'callback callback callback callback socials socials'
                'photofirst photofirst photofirst photosecond photosecond photosecond';
            }
        
        &-title {
            grid-area: title;
        }
        &-description {
            grid-area: description;
            @media (max-width: 640px) {
                display: none;
            }
        }
        &-contact-1 {
            grid-area: contact-1;
        }
        &-contact-2 {
            grid-area: contact-2;
        }
        &-contact-3 {
            grid-area: contact-3;
        }
        &-contact-4 {
            grid-area: contact-4;
        }
        &-photofirst {
            grid-area: photofirst;
        }
        &-photosecond {
            grid-area: photosecond;
        }
        &-callback {
            grid-area: callback;
        }
        &-socials {
            grid-area: socials;
            margin-left: auto;
            @media (max-width: 1024px) {
                margin-left: initial;
            }
            @media (max-width: 640px) {
                flex-direction: column;
                margin-left: auto;
            }
        }
    }
</style>