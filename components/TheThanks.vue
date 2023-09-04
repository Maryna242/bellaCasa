<template> 
    <div 
        class="w-full  bg-black/30 z-50 fixed top-0 left-0 right-0 bottom-0"
        @click="close"
    >
        <div class=" md:rounded-xl overflow-auto max-h-screen max-w-[912px] w-full my-0 mx-auto fixed md:top-1/2 md:left-1/2 md:bottom-[initial] md:-translate-x-1/2 md:-translate-y-1/2 left-0 top-0 bottom-0 h-full md:h-auto">
            <div class="flex flex-col h-full w-full bg-white pl-4 sm:pl-[130px] md:pl-10 lg:pl-[70px] mt-auto pr-6">
                <div class="flex justify-end  md:mt-3 md:mr-3">
                    <button
                        @click="close"
                    >
                        <div class="w-[30px] h-[20px] flex flex-col justify-between my-7 lg:my-6 mx-3 cursor-pointer">
                            <span 
                                class="block h-[2px] w-full bg-[#757575] rotate-[135deg] translate-y-[8px]"
                            />
                            <span
                                class="block h-[2px] w-full bg-[#757575] -rotate-[135deg] -translate-y-[10px]"
                            />
                        </div>
                    </button>
                </div>
                <div class="flex flex-col mt-auto">
                    <h2 class="text-[28px] font-semibold font-montserrat text-[#4E4747] mb-3">
                        Дякую!
                        <br/>
                        Ми отримали Ваші контакти.
                    </h2>
                    <p class=" text-lg text-[#4E4747] font-fixel font-medium">
                        Очікуйте дзвінок від нашого декоратора
                    </p>
                </div>
                <div class="flex justify-end pb-5 mb-auto pt-[50px]">
                    <NuxtImg src="/img/big_logo.webp" width="94" height="114" alt="img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'TheThanks',
    methods: {
        close() {
            console.log('close');
            this.$emit('close')
        },
    }
}
</script>