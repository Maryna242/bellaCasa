<template>
    <div data-aos="fade-up" data-aos-delay="100" class="flex items-center flex-col md:flex-row md:items-end md:justify-between">
        <div class=" p-2 md:flex md:flex-col  md:gap-12">
            <h2 class=" max-w-[400px] font-montserrat text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#4E4747]">
                {{$t('description.title')}}
            </h2>
            <NuxtImg 
                src="/img/img_left.webp" 
                width="1010" 
                height="840" 
                alt="img" 
                quality="85" 
                densities="x1 x2" 
            />
        </div>
        <div class=" p-2 flex flex-col">
            <p class="font-fixel text-sm md:text-base font-normal text-[#2B2B2B] w-full max-w-[505px]">
                {{ $t('description.text1') }}
                <br><br>
                {{ $t('description.text2') }}
            </p>
            <div class="flex gap-3 mt-6 ">
                <div>
                    <NuxtImg 
                        src="/img/IMG_0978.webp" 
                        width="500" 
                        height="740" 
                        alt="img" 
                        densities="x1 x2"
                    />
                </div>
                <div>
                    <NuxtImg 
                        src="/img/img_right.webp" 
                        width="500" 
                        height="740" 
                        alt="img" 
                        densities="x1 x2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheDescription'
}
</script>