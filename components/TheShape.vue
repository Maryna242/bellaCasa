<template>
    <div class=" w-full max-w-[1440px] my-[120px] mx-auto">
        <div class=" max-w-[1240px] my-0 mx-auto px-[104px]">
            <div class="flex gap-[126px]">
                <div class="">
                    <h3 class=" font-fixel font-extralight text-[32px] text-[#2B2B2B]">
                        Бажаєте стати нашим щасливим клієнтом?
                        Ми вже чекаємо вашого повідомлення!
                    </h3>
                </div>
                <form class="flex flex-col gap-4">
                    <input type="text" placeholder="Ваше ім’я" name="name" class="p-3 rounded border-[#DFDFE8] border-2 w-[505px]" />
                    <input type="tel" placeholder="Телефон" name="telephone" class="p-3 rounded border-[#DFDFE8] border-2" />
                    <input type="text" placeholder="Місто" name="city" class="p-3 rounded border-[#DFDFE8] border-2" />
                    <input type="@mail" placeholder="Пошта" name="@mail" class="p-3 rounded border-[#DFDFE8] border-2" />
                    <textarea type="text" rows="5" placeholder="Якщо бажаєте - напишіть, що саме цікавить" name="name" class="p-3 rounded border-[#DFDFE8] border-2" />
                    <button class="bg-[#F8B1AB] hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] py-3 px-9 rounded text-white font-fixel">
                        Відправити повідомлення
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'TheShape',
    }
</script>