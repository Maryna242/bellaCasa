<template>
    <div data-aos="fade-up" data-aos-delay="100" class=" w-full mt-[60px] md:mt-[80px] lg:mt-[100px] mx-auto relative bg-[#0B3B60] before:content-[''] before:bg-mosaic before:z-10 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[320px]  before:bg-cover before:bg-no-repeat">
        <div class="md:px-8 px-4 max-w-[1240px] my-0 mx-auto pb-1 md:pb-3 pt-10 md:pt-[64px] relative z-10">
            <div class="grid lg:grid-cols-[150px,1fr] gap-10 "> 
                <NuxtImg 
                    src="/img/logo.webp" 
                    width="300" 
                    height="170" 
                    alt="logo" 
                    class="w-auto h-auto max-w-[150px] self-start"
                />
                <div class="grid lg:gap-y-[64px] gap-10 lg:grid-cols-1 sm:grid-cols-2">
                    <div class=" lg:contents block">
                        <ul class="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-x-[60px] gap-10 mb-10 lg:mb-0">
                            <li class=" font-fixel font-medium text-lg text-white">
                                <p class="font-fixel font-medium text-lg text-white md:mb-2 lg:mb-3">
                                    {{ $t('footer.title1') }}
                                </p>
                                <a href="tel:+380956711087" class=" font-fixel font-normal hover:text-white text-[#DFDFE8]">
                                    +38 095 6711 087
                                </a>
                            </li>
                        </ul>
                        <ul class="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-x-[60px] gap-10">
                            <li class=" font-fixel font-medium text-lg text-white">
                                <p class="font-fixel font-medium text-lg text-white md:mb-5 lg:mb-6">
                                    {{ $t('footer.title') }}
                                </p>
                                <p>
                                    {{ $t('footer.city1') }}
                                </p>
                                <p>
                                    {{ $t('footer.street1') }}
                                </p>
                                <a href="tel:+380961353553" class=" font-fixel font-normal hover:text-white text-[#DFDFE8]">
                                    +38 096 1353 553
                                </a>
                            </li>
                            <li class=" font-fixel font-medium text-lg text-white lg:mt-auto">
                                <p>
                                    {{ $t('footer.city2') }}
                                </p>
                                <p>
                                    {{ $t('footer.street2') }}
                                </p>
                                <a href="tel:+380679714864" class=" font-fixel font-normal hover:text-white text-[#DFDFE8]">
                                    +38 067 9714 864
                                </a>
                            </li>
                            <li class=" font-fixel font-medium text-lg text-white lg:mt-auto">
                                <p>
                                    {{ $t('footer.city3') }}
                                </p>
                                <p>
                                    {{ $t('footer.street3') }}
                                </p>
                                <a href="tel:+380972883648" class=" font-fixel font-normal hover:text-white text-[#DFDFE8]">
                                    +38 097 2883 648
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-x-[72px] gap-10 translate-y-0 lg:translate-y-0 sm:-translate-y-[125px]">    
                        <li class=" font-fixel font-medium text-lg text-white">
                            <p>
                                {{ $t('footer.time') }}
                            </p>
                            <p class=" font-fixel font-normal text-[#DFDFE8]">
                                {{ $t('footer.monday') }}
                                <br/>
                                {{ $t('footer.saturday') }}
                                <br/>
                                {{ $t('footer.sunday') }}
                            </p>
                        </li>
                        <li class=" font-fixel font-medium text-lg text-white">
                            <p>
                                {{ $t('footer.contact') }}
                            </p>
                            <a href="mailto:bellacasa.kyiv@gmail.com" class=" font-fixel font-normal text-[#DFDFE8] border-b border-white/0 hover:border-b hover:border-white list-animate">
                                bellacasa.kyiv@gmail.com
                            </a>
                        </li>
                        <li class="font-fixel font-medium text-lg text-white flex flex-col sm:-order-last lg:order-1">
                            <p class=" mb-3 md:mb-6">
                                {{ $t('footer.social') }}
                            </p>
                            <div class="flex gap-5">
                                <a href="https://www.facebook.com/viktoriya.burbyga/" class="facebook-footer flex w-[88px] h-[88px] items-center border border-white rounded-full justify-center hover:bg-white transition-colors">

                                </a>
                                <a href="https://www.instagram.com/salon_bella_casa" class="instagram-footer flex w-[88px] h-[88px] items-center border border-white rounded-full justify-center hover:bg-white transition-colors ">

                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <p class=" font-fixel font-normal text-xs md:text-base text-[#DFDFE8] pt-[50px] sm:pt-[125px] lg:pt-[70px] flex justify-center">
                {{ $t('footer.paragraph') }}
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
            mask-repeat: no-repeat;
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
            mask-repeat: no-repeat;
            width: 28px;
            height: 28px;
            background: #FFF;
            mask-size: contain;
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
    .list-animate{
        border-bottom: 1px solid transparent; /* Начнем с невидимой границы */
        transition: border-bottom 0.3s ease-in; /* Время анимации и кривая анимации (можете настроить по своему усмотрению) */
        &:hover{
            .list-animate{
                border-bottom: 1px solid white; /* Цвет границы при наведении */
            }
        }
    }
</style>