<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto px-[105px] max-[1024px]:px-8 max-[640px]:px-4">
            <div class="my-history">
                <div class="flex relative max-[640px]:pr-[63px] max-[768px]:pr-[10px] pr-[63px] my-history-photo max-[1024px]:mb-5">
                    <img src="~/static/img/photo_2023-06-07_19-31-49.webp" alt="photo" width="400px" height="552px" class=" object-cover max-h-[552px] w-full">
                    <button href="#" class="play flex w-[115px] h-[115px] hover:bg-white hover:border-4 hover:border-[#F8B1AB] active:border-[#F28B82] items-center border border-[#F8B1AB] bg-[#F8B1AB] rounded-full justify-center absolute right-0 top-[10%] transition-colors">

                    </button>   
                </div>
                <h2 class=" my-history-title font-[montserrat] font-semibold max-[640px]:text-2xl max-[768px]:text-[28px] text-[32px] text-[#4E4747] mb-6">
                    Історія нашого бренду, або про гарантію
                </h2>
                <p class="my-history-text-1 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    Салон штор Bella Casa відзначається неперевершеним стилем і елегантністю. 
                    Завдяки нашому досвіду і компетентності, ми забезпечуємо професійну консультацію з 
                    вибору тканини, розробку індивідуального дизайну та налаштування шторного обладнання.
                </p>
                <p class="my-history-text-2 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    Ви просто телефонуєте нам, ділитеся історією і ми надаємо комплексний сервіс 
                    від початкової консультації до встановлення штор. Ми беремо на себе всі етапи процесу, 
                    щоб ви могли насолоджуватися своїми новими шторами без жодних клопотів.
                </p>
                <p class="my-history-text-3 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    Ми використовуємо передові технології в галузі виготовлення та управління шторами, 
                    пропонуємо автоматизовані системи керування, які дозволяють вам зручно регулювати 
                    освітлення та приватність у вашому приміщенні. В цьому ми найкращі!
                </p>
                <p class="my-history-text-4 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    Звертаючись до нашого салону  ви можете бути впевнені, що отримаєте найвищу 
                    якість обслуговування, дизайну та виготовлення штор, я особисто це проконтролюю.
                </p>
                <p class="my-history-text-5 text-end font-medium text-lg mt-0">
                    Вікторія Андерс, засновниця бренду Bella Casa.
                </p>
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
    .play{
        &::before{
            content: "";
            display: block;
            mask-image: url('~/static/img/Polygon.webp');
            width: 22.29px;
            height: 26px;
            mask-size: contain;
            background: #FFF;
            transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover{
            &::before {
                background: #F8B1AB;
            }
        }
        &:active{
            &::before {
                background: #F28B82;
            }
        }
    }
    .my-history{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 70px;
        grid-template-areas: "photo title"
            "photo text-1"
            'photo text-2'
            'photo text-3'
            'photo text-4'
            'text-5 text-5';
            @media (max-width: 1024px) {
                grid-template-columns: 1fr 1fr;
                column-gap: 10px;
                grid-template-areas: "photo title"
                "photo text-1"
                'photo text-2'
                'photo text-3'
                'text-4 text-4'
                'text-5 text-5';
            }
            @media (max-width: 768px) {
                grid-template-columns: 1fr 1fr;
                column-gap: 10px;
                grid-template-areas: "photo title"
                "photo text-1"
                'photo text-2'
                'text-3 text-3'
                'text-4 text-4'
                'text-5 text-5';
            }
            @media (max-width: 640px) {
                grid-template-columns: 1fr;
                column-gap: 10px;
                grid-template-areas: "title"
                "photo"
                'text-1'
                'text-2'
                'text-3'
                'text-4'
                'text-5';
            }

        &-title {
            grid-area: title;
        }
        &-photo {
            grid-area: photo;
        }
        &-text-1 {
            grid-area: text-1;
        }
        &-text-2 {
            grid-area: text-2;
        }
        &-text-3 {
            grid-area: text-3;
        }
        &-text-4 {
            grid-area: text-4;
        }
        &-text-5 {
            grid-area: text-5;
        }
    }
</style>