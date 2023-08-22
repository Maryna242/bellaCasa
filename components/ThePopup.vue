<template>
    <div class="w-full max-w-[1440px] bg-black/30 z-50">
        <div class="lg:max-w-[1068px] my-0 mx-auto">
            <div class="flex justify-center">
                <img src="~/static/img/IMG_0973.webp" width="320" height="712" alt="img">
                <div class="bg-white pl-10 pr-[47px]">
                    <h2 class="text-[#4E4747] lg:text-[32px] font-semibold font-[montserrat] mt-[67px]">
                        Заповніть форму
                    </h2>
                    <p class="text-[#4E4747] lg:text-lg font-medium font-fixel">
                        і ми підберемо для Вас найкращий варіант
                    </p>
                    <form class="flex flex-col gap-4 w-full mt-10">
                    <input type="text" placeholder="Ваше ім’я" name="name" class="p-3 rounded border-[#DFDFE8] border-2 focus-visible:outline-[#728A9C]" />
                    <input type="tel" placeholder="Телефон" name="telephone" class="p-3 rounded border-[#DFDFE8] border-2 focus-visible:outline-[#728A9C]" />
                    <input type="text" placeholder="Місто" name="city" class="p-3 rounded border-[#DFDFE8] border-2 focus-visible:outline-[#728A9C]" />
                    <input type="@mail" placeholder="Пошта" name="@mail" class="p-3 rounded border-[#DFDFE8] border-2 focus-visible:outline-[#728A9C]" />
                    <textarea type="text" rows="5" placeholder="Якщо бажаєте - напишіть, що саме цікавить" name="name" class="p-3 rounded border-[#DFDFE8] border-2 focus-visible:outline-[#728A9C]" />
                    <button class="bg-[#F8B1AB] border-2 border-[#F8B1AB] hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] py-3 px-9 rounded text-white font-fixel transition-colors">
                        Відправити повідомлення
                    </button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ThePopup',
    }
</script>