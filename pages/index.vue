<template>
    <div class="flex flex-col bg-[#F9F9FB]" @scroll="onScroll">
        <the-main-animation />
        <Header />
        <Intro
            @successSend="showThanks = true"
            @errorSend="showError = true"  
        />
        <the-subtitle/>
        <the-advantages/>
        <the-projects :width="width"/>
        <the-steps/>
        <the-variants/>
        <the-questions/>
        <the-contacts/>
        <the-best-offers :width="width"/>
        <the-consultation
            @showPopup="showFormPopup = true"
        />
        <the-history/>
        <the-text/>
        <the-customers/>    
        <the-shape
            @successSend="showThanks = true"  
            @errorSend="showError = true"  
        />
        <the-instagram/>
        <the-footer/>  
        <transition name="fade-popup">
            <the-thanks
                v-if="showThanks"
                @close="showThanks = false"
            />
        </transition> 
        <transition name="fade-popup">
            <the-error
                v-if="showError"
                @close="showError = false"
            />
        </transition> 
        <transition name="fade-popup">
            <the-popup
                v-if="showFormPopup"
                @close="showFormPopup = false"
                @successSend="showThanks = true"
                @errorSend="showError = true"
            />
        </transition>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import TheMainAnimation from '../components/TheMainAnimation.vue'

export default {
  components: { TheMainAnimation },
    name: 'IndexPage',
    data() {
        return {
            width: 0,
            showThanks: false,
            showError: false,
            showFormPopup: false,
        }
    },
    mounted() {
        this.updateWidth()
        window.addEventListener('resize', this.updateWidth)
        this.aosInit()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth)
    },
    methods: {
        onScroll() {
            console.log('scroll');
        },
        updateWidth() {
            this.$nextTick(() => {
                this.width = window.innerWidth
            })
        },
        onThanks(){
            this.showThanks = true
        },
        onError(){
            this.showError = true
        },
        aosInit() {
            new AOS.init({ 
                disable: window.innerWidth < 640,
                // offset: 200,
                once: true
            })
        }
    }
}
</script>
