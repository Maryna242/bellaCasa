<template>
    <div class="w-full my-0 lg:min-h-[900px]">
        <div class="max-w-[1440px] mx-auto flex max-h-full flex-col sm:flex-row">
            <div class="flex sm:w-1/2 w-full min-h-[644px] sm:min-h-[1027px]">
                <video
                    autoplay
                    loop 
                    muted
                    playsinline
                    disablepictureinpicture
                    preload="auto"
                    class="w-full object-cover"
                    ref="video"
                >
                    <source src="/video/first_screen_video.mp4" type="video/mp4">
                </video>
                
            </div>
            <div class="min-h-[450px] sm:min-h-auto bg-[#0B3B60] relative before:content-[''] before:bg-mosaic-mob before:bg-contain before:bg-bottom sm:before:bg-[initial] sm:before:bg-mosaic before:absolute before:right-0 sm:before:top-0 before:bottom-0 before:left-0 sm:before:left-[initial] before:min-h-[375px] sm:before:min-h-auto before:w-full sm:before:max-w-[350px] before:bg-no-repeat sm:before:bg-cover w-full sm:w-1/2 flex"/>
            <the-form
                @showVideo="show"
                @successSend="$emit('successSend')"
                @errorSend="$emit('errorSend')"
            />
        </div>
        <LightBox
            v-if="visible"
            :media="media"
            :show-caption="false"
            @onClosed="handleHide"
        >
            <template slot="footer">
                <div class=" !h-0 !p-0"></div>
            </template>
        </LightBox>
        
    </div>
</template>


<script>
import TheForm from './TheForm.vue'

export default {
    components: { 
        TheForm,
    },
    name: 'Intro',
    data() {
        return {
            visible: false,
            media: [
                {
                    type: 'video',
                    sources: [
                    {
                        src: '/video/Bella Casa_v2.mp4',
                        type: 'video/mp4'
                    }
                    ],
                    width: 1920, // Required
                    height: 1080, // Required
                    autoplay: true,
                }
            ]
        }
    },
    mounted() {
        // this.$refs.video.play()
    },
    methods: {
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>
