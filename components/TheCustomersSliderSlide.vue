<template>
    <div class="w-full h-full flex">
        <div class="w-full h-[480px] flex">
            <video
                v-show="showVideo"
                id="video"
                controls
                preload="none"
                poster=""
                class="h-full object-contain mx-auto"
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
                :alt="`${index}`"
                width="800" 
                height="960" 
                class=" h-full w-full object-cover relative" 
            />
        </div>
        <button 
            v-if="item.type === 'video' && !showVideo" 
            href="#" 
            class="play top-0 right-1/2 translate-x-1/2 translate-y-[150%] flex w-[115px] h-[115px] items-center rounded-full justify-center absolute transition-colors"
            @click="onShowVideo"
            />
        <div
            v-if="item.review"
            class="union absolute bg-[#F5F5F5] rounded-[32px] bottom-5 px-3 py-4 lg:max-w-[360px] left-[15px] right-[15px]"
            :class="index % 2 === 0 ? 'union-rotate' : ''"
        >
            <span class="text-[15px] font-fixel !text-[#000000]" v-html="item.review" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheVariantsItemSlide',
    props: {
        item: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
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