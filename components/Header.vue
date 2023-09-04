<!-- Please remove this file from your project -->
<template>
    <header
        class="w-full fixed max-w-[1440px] right-1/2 translate-x-1/2 z-50"
        :class="headerClasses"
    >
        <div class="max-w-[1240px] my-0 mx-auto p-2 md:px-[32px] px-4 z-10 relative">
            <nav class="flex lg:justify-between py-4 items-center flex-wrap">
                <p></p>
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
                            @click.prevent="scrollToSection('#advantages-section')"
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
                <span class="lg:px-4 ">
                    <NuxtImg 
                        src="/img/logo_white.webp" 
                        alt="logo" 
                        class="w-[73px] h-[41px] md:w-[90px] md:h-[50px]"
                    />
                </span>
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
                            <NuxtImg src="/img/smartphone.webp" width="24px" height="24px"/>
                            +38 096 1353 553
                        </a>
                    </li>
                    <li class="hidden sm:block">
                        <a href="javascript:void(0)" class="hover:text-[#F8B1AB] before:content-[''] after:border-r after:border-white">
                            UA 
                        </a>
                        <a href="javascript:void(0)" class="hover:text-[#F8B1AB] pl-1">
                            EN
                        </a>
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
                        <li class="hover:border-b hover:border-white">
                            <a href="#">
                                {{ $t('header.list1') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white">
                            <a href="#">
                                {{ $t('header.list2') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white">
                            <a href="#">
                                {{ $t('header.list3') }}
                            </a>
                        </li>
                        <li class="hover:border-b hover:border-white">
                            <a href="#">
                                {{ $t('header.list4') }}
                            </a>
                        </li>
                        <li class="hidden lg:flex hover:border-b hover:border-white">
                            <a href="#">
                                {{ $t('header.list5') }}
                            </a>
                        </li>
                        <li class="block sm:hidden">
                            <a href="#" class="hover:text-[#F8B1AB] before:content-[''] after:border-r after:border-white">
                                UA 
                            </a>
                            <a href="#" class="hover:text-[#F8B1AB] pl-1">
                                EN
                            </a>
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
        computed: {
            headerClasses() {
                return {
                    // '!bg-[#0B3B60]': this.showMobileMenu,
                    '!bg-[#0B3B61]/60': this.bg,
                }
            }
        },
        data(){
            return {
                showMobileMenu: false,
                bg: false
            }
        },
        mounted() {
            this.bg = window.scrollY > 100
            window.addEventListener('scroll', () => {
                this.bg = window.scrollY > 100
            })
        },
        beforeDestroy() {
            window.removeEventListener('scroll', () => {
                this.bg = window.scrollY > 100
            })
        },
        methods: {
            scrollToSection(targetId){
                const target = document.querySelector(targetId);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
</style>
