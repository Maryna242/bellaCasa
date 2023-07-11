<template>
    <div class="my-36 text-center flex flex-col flex-wrap ">
        <h2 class="text-[#4E4747] font-[montserrat] font-semibold text-[32px]">
            Наші результати в числах
        </h2>
        <ul class="flex mt-8 mb-[140px] justify-center">
            <li v-for="(item, index) in ourResults"
                :key="index"
                class=" px-[53px] relative after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[1px] after:bg-[#D9D9D9]"
                :class="index === ourResults.length - 1 && 'after:hidden'"
            >
                <p class="text-[#757575] font-[montserrat] font-semibold text-[44px]">
                    {{ item.title }}<span class="text-[#F8B1AB] font-[montserrat] font-semibold text-[44px]">{{ item.symbol }}</span>
                </p>
                <span class="text-[#4E4747] font-fixel text-lg font-medium">
                    {{ item.description }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TheResults',
        data() {
            return {
                ourResults: [
                    {
                        title: '50 000',
                        symbol: '',
                        description: 'Каталог тканин'
                    },
                    {
                        title: '13',
                        symbol: '+',
                        description: 'Років на ринку'
                    },
                    {
                        title: '4 500',
                        symbol: '+',
                        description: 'Реалізованих проектів'
                    },
                    {
                        title: '80',
                        symbol: '%',
                        description: 'Співпраця з архітекторами'
                    }
                ]
            }
        }
    }
</script>
