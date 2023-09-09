<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
         <div class="max-w-[1240px] my-0 mx-auto px-[105px] max-[1024px]:px-8 max-[640px]:px-4">
            <div class="my-history ">
                <div
                    class="flex relative my-history-photo max-[1024px]:mb-5"
                    :class="!showVideo && 'pr-[63px] max-[1024px]:pr-[10px] max-[640px]:pr-[63px]'"
                >
                    <div 
                        class="w-full h-full flex">
                        <video
                            v-show="showVideo"
                            id="video"
                            controls
                            preload="none"
                            poster=""
                            class="w-full h-[550px]"
                            ref="video"
                        >
                            <source
                                :src="item.video"
                                type="video/mp4"
                            />
                        </video>
                        <NuxtImg
                            v-if="!showVideo"
                            :src="item.url"
                            alt="history"
                            class="w-full object-cover"
                            width="830"
                            height="1150" 
                            densities="x1 x2"
                        />
                    </div>
                    <button
                        v-if="item.type === 'video' && !showVideo"
                        class="play flex w-[115px] h-[115px] items-center rounded-full justify-center absolute right-0 sm:bottom-[10%] top-[10%] sm:top-[initial] lg:bottom-[initial] lg:top-[10%] transition-colors"
                        @click="onShowVideo"  
                    />  
                </div>
                <h2 class=" my-history-title font-montserrat font-semibold max-[640px]:text-2xl max-[768px]:text-[28px] text-[32px] text-[#4E4747] mb-6">
                    {{ $t('history.title') }}
                </h2>
                <p class="my-history-text-1 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    {{ $t('history.paragraph1') }}
                </p>
                <p class="my-history-text-2 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    {{ $t('history.paragraph2') }}
                </p>
                <p class="my-history-text-3 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    {{ $t('history.paragraph3') }}
                </p>
                <p class="my-history-text-4 mb-6 font-fixel font-light text-[#2B2B2B] md:text-sm text-[15px]">
                    {{ $t('history.paragraph4') }}
                </p>
                <p class="my-history-text-5 text-end font-medium text-lg mt-0">
                    {{ $t('history.subtitle') }}
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
    components: { 
        TheEmployees 
    },
    
    data() {
        return {
            item: 
                {
                    url: '/img/photo_2023-06-07_19-31-49.webp',
                    video: '/video/IMG_0640.mp4',
                    type:'video',
                },
            showVideo: false
        }
    },
    methods: {
        onShowVideo() {
            this.showVideo = true
            this.$refs.video.play()
        }
    }
}
</script>
<style lang="scss">
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