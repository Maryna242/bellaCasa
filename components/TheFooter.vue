<template>
    <div class=" w-full max-w-[1440px] my-0 mx-auto relative bg-[#0B3B60] before:content-[''] before:bg-mosaic before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[320px]  before:bg-cover before:bg-no-repeat">
        <div class="md:px-8 px-4 max-w-[1240px] my-0 mx-auto pb-1 md:pb-3 pt-10 md:pt-[64px] relative z-10">
            <div class="grid lg:grid-cols-[150px,1fr] gap-10 "> 
                <img src="~/static/img/logo.webp" width="150px" height="85px" alt="logo" class="w-auto h-auto max-w-[150px] self-start">
                <div class="grid lg:gap-y-[64px] gap-10 lg:grid-cols-1 sm:grid-cols-2">
                    <ul class="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-x-[72px] gap-10">
                        <li class=" font-fixel font-medium text-lg text-white">
                            <p class="font-fixel font-medium text-lg text-white md:mb-5 lg:mb-6">
                                Наші салони:
                            </p>
                            <p>
                                м. Київ
                            </p>
                            <p>
                                вул. Передславинська 55А
                            </p>
                            <a href="+38 096 1353 553" class=" font-fixel font-normal text-[#DFDFE8]">
                                +38 096 1353 553
                            </a>
                        </li>
                        <li class=" font-fixel font-medium text-lg text-white lg:mt-auto">
                            <p>
                                м. Дніпро
                            </p>
                            <p>
                                вул. Михайла Грушевського 12
                            </p>
                            <a href="+38 097 2883 648" class=" font-fixel font-normal text-[#DFDFE8]">
                                +38 097 2883 648
                            </a>
                        </li>
                        <li class=" font-fixel font-medium text-lg text-white lg:mt-auto">
                            <p>
                                м. Кам’янське
                            </p>
                            <p>
                                пр. Тараса Шевченка 20
                            </p>
                            <a href="+38 097 2883 648" class=" font-fixel font-normal text-[#DFDFE8]">
                                +38 097 2883 648
                            </a>
                        </li>
                    </ul>
                    <ul class="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-x-[72px] gap-10 translate-y-0 lg:translate-y-0 sm:-translate-y-[125px]">    
                        <li class=" font-fixel font-medium text-lg text-white">
                            <p>
                                Графік роботи:
                            </p>
                            <p class=" font-fixel font-normal text-[#DFDFE8]">
                                Пн - Пт 10:00 - 19:00
                                <br/>
                                Сб 10:00 - 17:00
                            </p>
                        </li>
                        <li class=" font-fixel font-medium text-lg text-white">
                            <p>
                                Зв’язатися з нами:
                            </p>
                            <a href="mailto:bellacasa.kyiv@gmail.com" class=" font-fixel font-normal text-[#DFDFE8]">
                                bellacasa.kyiv@gmail.com
                            </a>
                        </li>
                        <li class="font-fixel font-medium text-lg text-white flex flex-col sm:-order-last lg:order-1">
                            <p class=" mb-3 md:mb-6">
                                Слідкуй за нами тут:
                            </p>
                            <div class="flex gap-5">
                                <a href="javascript:void(0)" class="facebook-footer flex w-[88px] h-[88px] items-center border border-white rounded-full justify-center hover:bg-white transition-colors">

                                </a>
                                <a href="javascript:void(0)" class="instagram-footer flex w-[88px] h-[88px] items-center border border-white rounded-full justify-center hover:bg-white transition-colors ">

                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <p class=" font-fixel font-normal text-xs md:text-base text-[#DFDFE8] pt-[50px] sm:pt-[125px] lg:pt-[70px] flex justify-center">
                © Салон штор Bella Casa, 2023
            </p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'TheFooter',
    }
</script>
<style lang="scss">
    .facebook-footer {
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/facebook.webp');
            width: 13.5px;
            height: 26px;
            mask-size: contain;
            background: #FFF;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        &:hover {
            &::before {
                background: #F8B1AB;
            }
        }
        &:active{
            &::before{
                background: #F28B82;
            }
        }
    }
    .instagram-footer {
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/instagram.webp');
            width: 28px;
            height: 28px;
            background: #FFF;
            mask-size: contain;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
            &:hover{
                background: #F8B1AB;
            }
        }
        
        &:hover {
            &::before {
                background: #F8B1AB;
            }
        }
        &:active{
            &::before{
                background: #F28B82;
            }
        }
    }
    // .my-footer {
    //     display: grid;
    //     grid-template-columns: repeat(4, 1fr);
    //     // gap: 25px 20px;
    //     grid-template-areas: 'photo photo title title'
    //         'photo block-1 block-2 block-3'
    //         'block-4 block-4 block-5 block-6';
    //     // @media (max-width: 1024px) {
    //     //     grid-template-columns: 1fr 1fr;
    //     //     gap: 20px;
    //     //     grid-template-areas: "title description"
    //     //     "contact-1 photofirst"
    //     //     'contact-2 photofirst'
    //     //     'contact-3 photofirst'
    //     //     'contact-4 photosecond'
    //     //     'callback photosecond'
    //     //     'socials photosecond';
    //     // }
    //     &-title {
    //         grid-area: title;
    //     }
    //     &-photo {
    //         grid-area: photo;
    //     }
    //     &-block-1 {
    //         grid-area: block-1;
    //     }
    //     &-block-2 {
    //         grid-area: block-2;
    //     }
    //     &-block-3 {
    //         grid-area: block-3;
    //     }
    //     &-block-4 {
    //         grid-area: block-4;
    //     }
    //     &-block-5 {
    //         grid-area: block-5;
    //     }
    //     &-block-6 {
    //         grid-area: block-6;
    //     }
    // }
</style>