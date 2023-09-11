<!-- Please remove this file from your project -->
<template>
    <header
        class="w-full absolute right-1/2 translate-x-1/2 z-50"
        :class="headerClasses"
    >
        <div class="max-w-[1240px] my-0 mx-auto p-2 md:px-[32px] px-4 z-10 relative">
            <nav class="flex lg:justify-between py-4 items-center flex-wrap">
                <ul class="hidden lg:flex gap-x-9 font-semibold font-fixel text-white flex-wrap cursor-pointer ">
                    <li class="hover:border-b hover:border-white border-b border-white/0">
                        <a 
                            href="javascript:void(0)" 
                            class=""
                            @click.prevent="scrollToSection('#projects-section')"
                        >
                            {{ $t('header.list1') }}
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white border-b border-white/0">
                        <a 
                            href="javascript:void(0)"
                            @click.prevent="scrollToSection('#variants-section')"
                        >
                        {{ $t('header.list2') }}
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white border-b border-white/0">
                        <a 
                            href="javascript:void(0)"   
                            @click.prevent="scrollToSection('#history-section')"
                        >
                        {{ $t('header.list3') }}
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white border-b border-white/0">
                        <a 
                            href="javascript:void(0)"
                            @click.prevent="scrollToSection('#customers-section')"
                        >
                        {{ $t('header.list4') }}
                        </a>
                    </li>
                </ul>
                <span class="lg:px-4 logo cursor-pointer"
                    @click.prevent="scrollToSection('#main-section')"
                />
                <ul class="font-fixel flex gap-x-[34px] text-white font-semibold ml-auto lg:ml-0">
                    <li class="hidden lg:flex border-b border-white/0 hover:border-b hover:border-white">
                        <a 
                            href="javascript:void(0)"
                            @click.prevent="scrollToSection('#contacts-section')"  
                        >
                        {{ $t('header.list5') }}
                        </a>
                    </li>
                    <li class="">
                        <a href="tel:+38 096 1353 553" class="flex hover:text-[#F8B1AB]">
                            <NuxtImg src="/img/smartphone.webp" width="24" height="24"/>
                            +38 096 1353 553
                        </a>
                    </li>
                    <li class="hidden sm:block">
                        <NuxtLink to="/"
                            :class="{ 'text-[#F8B1AB]': currentLanguage === 'ua' }"
                            class="hover:text-[#F8B1AB] before:content-[''] after:border-r after:border-white">
                                UA 
                        </NuxtLink>
                        <NuxtLink to="/en" 
                            :class="{ 'text-[#F8B1AB]': currentLanguage === 'en' }"
                            class="hover:text-[#F8B1AB] pl-1">
                                EN
                        </NuxtLink>
                    </li>
                </ul>
                <button
                    class="lg:hidden block ml-3 md:ml-8 z-10 border rounded-full"
                    :class="showMobileMenu ? 'border-white/0   transition ease-in-out duration-100' : ''"
                    @click="showMobileMenu = !showMobileMenu"
                >
                    <div class="w-[30px] h-[20px] flex flex-col justify-between my-4 mx-3 cursor-pointer">
                        <span 
                            class="block h-[2px] w-full bg-white rounded-[9px]"
                            :class="showMobileMenu ? 'rotate-[135deg] translate-y-[8px]': ''" 
                        />
                        <span
                            class="block h-[2px] w-full bg-white rounded-[9px]"
                            :class="showMobileMenu ? 'opacity-0' : ''"
                        />
                        <span
                            class="block h-[2px] w-full bg-white rounded-[9px]"
                            :class="showMobileMenu ? ' -rotate-[135deg] -translate-y-[10px]' : ''"
                        />
                    </div>
                </button>
            </nav>
        </div>
        <transition name="fade">
            <div v-if="showMobileMenu" class=" absolute top-0 left-0 right-0 pt-[100px] !bg-[#0B3B60]">
                <nav>
                    <ul class="flex flex-col gap-8 pb-10 items-center text-center gap-x-9 font-semibold font-fixel text-white flex-wrap cursor-pointer ">
                        <li class="hover:border-b hover:border-white border-b border-[#0B3B60]">
                            <a href="javascript:void(0)"
                            @click.prevent="scrollToSection('#projects-section')"
                            >
                                {{ $t('header.list1') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white border-b border-[#0B3B60]">
                            <a href="javascript:void(0)"
                            @click.prevent="scrollToSection('#variants-section')"
                            >
                                {{ $t('header.list2') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white border-b border-[#0B3B60]">
                            <a href="javascript:void(0)"
                            @click.prevent="scrollToSection('#history-section')"
                            >
                                {{ $t('header.list3') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white border-b border-[#0B3B60]">
                            <a href="javascript:void(0)"
                            @click.prevent="scrollToSection('#customers-section')"
                            >
                                {{ $t('header.list4') }}
                            </a>
                        </li>
                        <li class="hidden lg:flex hover:border-b hover:border-white border-b border-[#0B3B60]">
                            <a href="javascript:void(0)"
                            @click.prevent="scrollToSection('#contacts-section')"  
                            >
                                {{ $t('header.list5') }}
                            </a>
                        </li>
                        <li class="block sm:hidden">
                            <NuxtLink to="/"
                                :class="{ 'text-[#F8B1AB]': currentLanguage === 'ua' }"
                                class="hover:text-[#F8B1AB] before:content-[''] after:border-r after:border-white">
                                UA 
                            </NuxtLink>
                            <NuxtLink to="/en" 
                                :class="{ 'text-[#F8B1AB]': currentLanguage === 'en' }"
                                class="hover:text-[#F8B1AB] pl-1">
                                EN
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script>
    export default {
        name: 'NuxtHeader',
        props: {
            introHeight: {
                type: Number,
                required: true,
            }
        },
        computed: {
            headerClasses() {
                return {
                    // '!bg-[#0B3B60]': this.showMobileMenu,
                    'header-fixed': this.bg,
                }
            },
            currentLanguage() {
                return this.$i18n.locale;
            },
        },
        data(){
            return {
                showMobileMenu: false,
                bg: false,
            }
        },
        mounted() {
            this.bg = window.scrollY > this.introHeight
            window.addEventListener('scroll', () => {
                this.bg = window.scrollY > this.introHeight
            })
        },
        beforeDestroy() {
            window.removeEventListener('scroll', () => {
                this.bg = window.scrollY > this.introHeight
            })
        },
        methods: {
            scrollToSection(targetId){
                const target = document.querySelector(targetId);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            },
        }
    }
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: transform .5s ease-in-out, opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-to{
    transform: translateY(-100%);
    opacity: 0;
}
.logo{
    &::before{
    content: "";
    display: block;
    mask-image: url('~/static/img/logo_white.webp');
    width: 90px;
    height: 51px;
    mask-size: contain;
    mask-repeat: no-repeat;
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
ul li {
    border-bottom: 1px solid transparent; /* Начнем с невидимой границы */
    transition: border-bottom 0.3s ease-in; /* Время анимации и кривая анимации (можете настроить по своему усмотрению) */
    &:hover{
        ul li{
            border-bottom: 1px solid white; /* Цвет границы при наведении */
        }
    }
}
.header-fixed {
    position: fixed;
    animation: headerShow .3s ease-in-out;
    animation-fill-mode: forwards;
    nav {
        padding: 5px 0;
    }
}

@keyframes headerShow {
    0% {
        transform: translate(50%, -100%);
        background: transparent;
    }
    100% {
        transform: translate(50%, 0);
        background: rgba(#0B3B61, .7);
    }
}
</style>
