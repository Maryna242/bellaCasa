<template>
    <div class="w-full">
        <div class="max-w-[1440px] my-0 mx-auto">
            <div class="flex mb-[140px]">
                <div class="flex">
                    <img src="~/static/img/photo_2023-06-27_20-01-58.png" class=" object-cover" width="357px" height="619px" alt="img">
                </div>
                <div class="bg-[#0B3B60] flex flex-col px-[58px] relative before:content-[''] before:bg-mosaic before:absolute before:right-0 before:top-0 before:bottom-0 before:w-full before:max-w-[250px] before:bg-no-repeat before:bg-cover w-3/4 flex">
                    <h2 class="text-white text-[32px] font-[montserrat] font-semibold z-10 pt-[80px]">
                        Важливі переваги, або чому ми найкращі
                    </h2>
                    <ul class="flex flex-col z-20 pt-12 pb-[60px] ">
                        <li
                            v-for="(item, index) in ourAdvantages" 
                            :key="index"
                            class="pb-4 mt-4 border-b border-[#345975]"
                            :class="index === ourAdvantages.length - 1 && 'border-b-0'"
                        >
                            <div class="grid grid-cols-2 ">
                                <div class="flex gap-4  items-center">
                                    <span class="text-[#F8B1AB] text-[32px] font-[montserrat] font-semibold">
                                        0{{ index + 1 }}
                                    </span>
                                    <span class="text-white text-[32px] font-fixel font-extralight">
                                        {{ item.h3 }}
                                    </span>
                                </div>
                                <div class="text-white font-fixel font-normal max-w-[460px]">
                                    {{ item.text }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheAdvantages',
        data() {
            return {
                ourAdvantages: [
                    {
                        index: '01',
                        h3: 'Досвід',
                        text: 'В нас найкращі дизайнери з багаторічним досвідом. Індивідуальний підхід під стиль інтер’єру та ваші творчі побажання!'
                    },
                    {
                        index: '02',
                        h3: 'Якість',
                        text: 'Ми працюємо тільки з найкращими постачальниками та використовуємо матеріали високої якості. Тканини з унікальною фактурою та малюнком, які є лише у нас.'
                    },
                    {
                        index: '03',
                        h3: 'Чистота',
                        text: 'Наші монтажники забезпечують повне прибирання. Ви можете впевнено розраховувати на нас, що ваші приміщення залишаться чистими та охайними!'
                    },
                    {
                        index: '04',
                        h3: 'Професійність',
                        text: 'Ми розуміємо, що кожен клієнт має свої унікальні потреби і вимоги. Виготовимо продукцію під будь-який тип вікон.'
                    },
                ]
            }
        }
}
</script>