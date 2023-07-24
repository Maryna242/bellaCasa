<template>
    <div class=" w-full max-w-[1440px] my-0 mx-auto relative bg-[#0B3B60] before:content-[''] before:bg-mosaic before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[320px]  before:bg-cover before:bg-no-repeat">
        <div class="flex max-w-[1240px] my-0 mx-auto py-[64px] gap-[60px] relative z-10">
            <img src="../static/img/logo.png" width="150px" height="85px" alt="logo" class=" w-auto h-auto max-w-[150px] self-start">
            <div>
                <p class=" font-fixel font-medium text-lg text-white mb-6">
                    Наші салони:
                </p>
                <ul class="grid grid-cols-3 gap-y-16 gap-x-[72px]">
                    <li class="font-fixel font-medium text-lg text-white">
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
                    <li class="font-fixel font-medium text-lg text-white">
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
                    <li class="font-fixel font-medium text-lg text-white">
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
                    <li class="font-fixel font-medium text-lg text-white">
                        <p>
                            Графік роботи:
                        </p>
                        <p class=" font-fixel font-normal text-[#DFDFE8]">
                            Пн - Пт 10:00 - 19:00
                            <br/>
                            Сб 10:00 - 17:00
                        </p>
                    </li>
                    <li class="font-fixel font-medium text-lg text-white">
                        <p>
                            Зв’язатися з нами:
                        </p>
                        <a href="mailto:bellacasa.kyiv@gmail.com" class=" font-fixel font-normal text-[#DFDFE8]">
                            bellacasa.kyiv@gmail.com
                        </a>
                    </li>
                    <li class="font-fixel font-medium text-lg text-white">
                        <p class="mb-6">
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
            mask-image: url('~/static/img/facebook.png');
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
            mask-image: url('~/static/img/instagram.png');
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
</style>