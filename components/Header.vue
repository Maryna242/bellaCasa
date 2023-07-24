<!-- Please remove this file from your project -->
<template>
    <header class="w-full bg-[#0B3B60]/20 fixed max-w-[1440px] right-1/2 translate-x-1/2 z-50">
        <div class="max-w-[1240px] my-0 mx-auto p-2">
            <nav class="flex justify-between py-4 items-center flex-wrap">
                <ul class="flex gap-x-9 font-semibold font-fixel text-white flex-wrap cursor-pointer ">
                    <li class="hover:border-b hover:border-white">
                        <a href="#">
                            ШТОРИ
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white">
                        <a href="#">
                            ПРОЕКТИ
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white">
                        <a href="#">
                            ПРО НАС
                        </a>
                    </li>
                    <li class="hover:border-b hover:border-white">
                        <a href="#">
                            ВІДГУКИ
                        </a>
                    </li>
                </ul>
                <span class="px-4">
                    <img src="../static/img/logo_white.png" width="90px" height="50px" alt="logo" class="">
                </span>
                <ul class="font-fixel flex gap-x-[34px] text-white font-semibold">
                    <li class="hover:border-b hover:border-white">
                        <a href="#">
                            КОНТАКТИ
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="flex hover:text-[#F8B1AB]">
                            <img src="../static/img/smartphone.png" width="24px" height="24px">
                            +38 096 1353 553
                        </a>
                    </li>
                    <li class="">
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
    </header>
</template>

<script>
    export default {
        name: 'NuxtHeader'
    }
</script>
