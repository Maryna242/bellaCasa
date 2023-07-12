<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto py-2 px-[106px] border-b pb-[80px]">
            <div class="flex gap-10">
                <div class="gap-10 flex flex-col w-1/2">
                    <h2 class="text-[#4E4747] font-[montserrat] font-semibold text-[32px]">
                        Щасливі клієнти обожнюють ці моделі
                    </h2>
                    <div class="border border-[#D9D9D9] px-[63px] py-8">
                        <span class="text-lg text-[#2B2B2B] font-fixel font-medium">
                            Штора Dimout, бежева
                        </span>
                        <ul class="p-2 font-fixel text-[15px] font-light text-[#2B2B2B] castom-list">
                            <li>
                                Порт’єра Туреччина
                            </li>
                            <li>
                                Карниз KS
                            </li>
                            <li>
                                Розмір м (ш/в) - 3,1 х 2,75
                            </li>
                            <li>
                                Під замовлення 5 - 7 днів
                            </li>
                        </ul>
                        <p class="font-fixel text-[15px] font-light text-[#2B2B2B] pb-4">
                            Ціна за штори
                            <span class="font-[montserrat] text-[#0B3B60] font-semibold text-2xl">
                                4218 грн
                            </span>
                        </p>
                        <img src="~/static/img/img_left1.png" width="368px" height="152px" alt="img">
                    </div>
                    <div class="border border-[#D9D9D9] px-[63px] py-8">
                        <span class="text-lg text-[#2B2B2B] font-fixel font-medium">
                            Штора Dimout, бежева
                        </span>
                        <ul class="p-2 font-fixel text-[15px] font-light text-[#2B2B2B] castom-list">
                            <li>
                                Порт’єра Голландія
                            </li>
                            <li>
                                Карниз KS
                            </li>
                            <li>
                                Розмір м (ш/в) - 3,1 х 2,75
                            </li>
                            <li>
                                Під замовлення 5 - 7 днів
                            </li>
                        </ul>
                        <p class="font-fixel text-[15px] font-light text-[#2B2B2B] pb-4">
                            Ціна за штори
                            <span class="font-[montserrat] text-[#0B3B60] font-semibold text-2xl">
                                8958 ₴
                            </span>
                        </p>
                        <img src="~/static/img/img_left2.png" width="368px" height="152px" alt="img">
                    </div>
                </div>
                <div class="flex flex-col gap-10  w-1/2">
                    <div class="border border-[#D9D9D9] px-[63px] py-8">
                        <span class="text-lg text-[#2B2B2B] font-fixel font-medium">
                            Штора Black out
                        </span>
                        <ul class="p-2 font-fixel text-[15px] font-light text-[#2B2B2B] castom-list">
                            <li>
                                Порт’єра Туреччина
                            </li>
                            <li>
                                Карниз KS
                            </li>
                            <li>
                                Розмір м (ш/в) - 3,1 х 2,75
                            </li>
                            <li>
                                Під замовлення 5 - 7 днів
                            </li>
                        </ul>
                        <p class="font-fixel text-[15px] font-light text-[#2B2B2B] pb-4">
                            Ціна за штори
                            <span class="font-[montserrat] text-[#0B3B60] font-semibold text-2xl">
                                5682 грн
                            </span>
                        </p>
                        <img src="~/static/img/img_right1.png" width="368px" height="152px" alt="img">
                    </div>
                    <div class="border border-[#D9D9D9] px-[63px] py-8">
                        <span class="text-lg text-[#2B2B2B] font-fixel font-medium">
                            Штора Dimout, бежева
                        </span>
                        <ul class="p-2 font-fixel text-[15px] font-light text-[#2B2B2B] castom-list">
                            <li>
                                Порт’єра Німеччина
                            </li>
                            <li>
                                Карниз KS
                            </li>
                            <li>
                                Розмір м (ш/в) - 3,1 х 2,75
                            </li>
                            <li>
                                Під замовлення 5 - 7 днів
                            </li>
                        </ul>
                        <p class="font-fixel text-[15px] font-light text-[#2B2B2B] pb-4">
                            Ціна за штори
                            <span class="font-[montserrat] text-[#0B3B60] font-semibold text-2xl">
                                11478 грн
                            </span>
                        </p>
                        <img src="~/static/img/img_right2.png" width="368px" height="152px" alt="img">
                    </div>
                    <p class="font-fixel font-normal text-[#2B2B2B] mt-auto">
                        Ми впевнено можемо сказати, що Bella Casa - це про індивідуальний підхід. Тому чекаємо Вас в нашому шоурумі, де наші найкращі спеціалісти здійснять ваші побажання!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheBestOffers'
}
</script>

<style lang="scss">
.castom {
    &-list {
        li{
            padding:5px;
            font-size:16px;
        }
        
        li:before{
            content: '';
            display: inline-block;
            height: 3px;
            width: 3px;
            vertical-align: middle;
            border-radius:50%;
            background-color:#D9D9D9;
            margin-right:5px;
        }

    }
}
</style>
