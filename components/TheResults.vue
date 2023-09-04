<template>
    <div class=" lg:my-[140px] my-20 text-center flex flex-col  md:mx-auto" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-[#4E4747] font-montserrat font-semibold text-2xl md:text-[28px] lg:text-[32px]">
            Наші результати в числах
        </h2>
        <ul class="lg:mt-8 mt-5 grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-8">
            <li v-for="(item, index) in ourResults"
                :key="index"
                class=" md:px-3 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-0 md:after:bottom-0 md:after:w-[1px] after:h-[88px] md:after:bg-[#D9D9D9]"
                :class="index === ourResults.length - 1 && 'after:hidden'"
            >
                <p class="text-[#757575] font-montserrat font-semibold pb-1 text-4xl lg:text-[44px]">
                    {{ item.title }}<span class="text-[#F8B1AB] font-montserrat font-semibold text-4xl lg:text-[44px]">{{ item.symbol }}</span>
                </p>
                <span class="text-[#4E4747] px-[2px] font-fixel text-base lg:text-lg font-medium">
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
            block: { 
                content: '',
                isVisible: false
            },
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
    },
}
</script>
