<template>
    <div class="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-white font-semibold text-8xl font-sourcesans">
            Bella Casa
        </h1>
        <h2 class="text-white font-semibold font-[montserat] text-[32px] mb-[30px]">
            Штори. Жалюзі. Карнизи. Текстильний дизайн
        </h2>
        <form class="bg-[#D9D9D942]/20 border-[1px] border-[#DFDFE84D] rounded-xl border-solid p-6 backdrop-blur-xl">
            <p class="text-white font-fixel font-medium text-center">
                Безкоштовна консультація декоратора вже сьогодні!
            </p>
            <div class="gap-2 flex flex-wrap py-3 justify-center">
                <input type="text" placeholder="Ваше ім’я" name="name" class="p-3 rounded">
                <input type="tel" name="telephone" placeholder="Телефон" class="p-3 rounded">
                <button class="bg-[#F8B1AB] py-3 px-9 rounded text-white font-fixel">
                    Замовити дзвінок
                </button>
            </div>
            <p class="flex text-white text-sm gap-1">
                <img src="../static/img/map-pin.png" width="24px" height="24px" alt="map-pin">
                Салони: Київ, Дніпро, Кам’янське
            </p>
        </form>
        <div>
            <p class="text-white font-sourcesans font-normal text-lg rotate-180">
                в і д е о д и в и т и с ь
            </p>
            <a href="#">
                <img src="../static/img/Polygon.png" width="25px" height="25px" alt="play"> 
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheForm'
}
</script>