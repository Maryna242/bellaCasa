<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto px-[105px]">
            <div class="flex gap-[128px]">
                <div class="flex relative">
                    <img src="../static/img/photo_2023-06-07_19-31-49.png" alt="photo" width="400px" height="552px" class=" object-cover max-h-[552px]">
                    <a href="#" class="play flex w-[115px] h-[115px] items-center border border-[#F8B1AB] bg-[#F8B1AB] rounded-full justify-center absolute">

                    </a>
                </div>
                <div class="max-w-[500px]">
                    <h2 class=" font-[montserrat] font-semibold text-[32px] text-[#4E4747] mb-6">
                        Історія нашого бренду, або про гарантію
                    </h2>
                    <div class="flex gap-4 flex-col font-fixel font-light text-[#2B2B2B] text-[15px]">
                        <p class="">
                            Салон штор Bella Casa відзначається неперевершеним стилем і елегантністю. 
                            Завдяки нашому досвіду і компетентності, ми забезпечуємо професійну консультацію з 
                            вибору тканини, розробку індивідуального дизайну та налаштування шторного обладнання.
                        </p>
                        <p class="">
                            Ви просто телефонуєте нам, ділитеся історією і ми надаємо комплексний сервіс 
                            від початкової консультації до встановлення штор. Ми беремо на себе всі етапи процесу, 
                            щоб ви могли насолоджуватися своїми новими шторами без жодних клопотів.
                        </p>
                        <p class="">
                            Ми використовуємо передові технології в галузі виготовлення та управління шторами, 
                            пропонуємо автоматизовані системи керування, які дозволяють вам зручно регулювати 
                            освітлення та приватність у вашому приміщенні. В цьому ми найкращі!
                        </p>
                        <p class="">
                            Звертаючись до нашого салону  ви можете бути впевнені, що отримаєте найвищу 
                            якість обслуговування, дизайну та виготовлення штор, я особисто це проконтролюю.
                        </p>
                        <p class="text-end font-medium text-lg ">
                            Вікторія Андерс, засновниця бренду Bella Casa.
                        </p>
                    </div>
                </div>
            </div>
            <the-employees/>
        </div>
    </div>
</template>


<script>

import TheEmployees from './TheEmployees.vue'
export default {
    name: 'TheHistory',
    components: { TheEmployees },
}
</script>
<style lang="scss">
    .play::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/Polygon.png');
        width: 22.29px;
        height: 26px;
        mask-size: contain;
        background: #FFF;
    }
</style>