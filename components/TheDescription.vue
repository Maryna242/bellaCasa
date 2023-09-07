<template>
    <div class="flex items-center flex-col md:flex-row md:items-end md:justify-between">
        <div class=" p-2 md:flex md:flex-col  md:gap-12">
            <h2 class=" max-w-[400px] font-montserrat text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#4E4747]">
                {{$t('description.title')}}
            </h2>
            <NuxtImg src="/img/map-pin.webp" width="12" height="12" alt="map-pin"/>
            <NuxtImg 
                src="/img/map-pin.webp" 
                width="603" 
                height="504" 
                alt="img" 
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
                    />
                </div>
                <div>
                    <NuxtImg 
                        src="/img/img_right.webp" 
                        width="500" 
                        height="740" 
                        alt="img" 
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