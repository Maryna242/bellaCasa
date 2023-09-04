<template>
    <div class="w-full h-full flex">
        <video
            v-show="showVideo"
            id="video"
            controls
            preload="none"
            poster=""
            class="w-full"
            ref="video"
        >
            <source
                :src="slide.video"
                type="video/mp4"
            />
        </video>
        <NuxtImg v-if="!showVideo" :src="slide.url" :alt="`${index}`" class=" w-full object-cover"/>
        <button 
            v-if="slide.type === 'video' && !showVideo" 
            href="#" 
            class="play top-0 right-1/2 translate-x-1/2 translate-y-[130%] flex w-[115px] h-[115px] items-center rounded-full justify-center absolute transition-colors"
            @click="onShowVideo"    
        />
    </div>
</template>

<script>
export default {
    name: 'TheVariantsItemSlide',
    props: {
        slide: {
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
