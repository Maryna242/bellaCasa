<template>
    <div class="flex flex-col items-center absolute w-full max-w-[890px] px-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 class="text-white font-semibold md:text-8xl text-[56px] font-sourcesans mt-[193px]  md:pb-2">
            Bella Casa
        </h1>
        <h2 class="text-white font-semibold font-[montserrat] md:text-[32px] text-2xl md:mb-[30px] text-center ">
            Штори. Жалюзі. Карнизи. Текстильний дизайн
        </h2>
        <form class="bg-[#D9D9D942]/20 border-[1px] border-[#DFDFE84D] rounded-xl border-solid px-4 py-6 md:px-3 backdrop-blur-xl max-w-full order-1 md:order-none mt-[78px] md:mt-[30px]">
            <p class="text-white font-fixel font-medium text-center">
                Безкоштовна консультація декоратора вже сьогодні!
            </p>
            <div class="gap-2 flex flex-wrap md:flex-nowrap py-3 justify-center">
                <input type="text" placeholder="Ваше ім’я" name="name" class="p-3 rounded w-[312px]">
                <input type="tel" name="telephone" placeholder="Телефон" class="p-3 rounded w-[312px]">
                <button class="bg-[#F8B1AB] py-3 px-9 rounded w-[312px] border-2 border-[#F8B1AB] text-white font-fixel hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82]">
                    Замовити дзвінок
                </button>
            </div>
            <p class="flex text-white text-sm gap-1">
                <img src="~/static/img/map-pin.webp" width="24px" height="24px" alt="map-pin">
                Салони: Київ, Дніпро, Кам’янське
            </p>
        </form>
        <div class=" md:mt-12">
            <a href="#">
                <img src="~/static/img/btnVideo.svg" width="125px" height="125px" alt="play" class=""> 
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheForm'
}
</script>