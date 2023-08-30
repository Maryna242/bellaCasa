<template>
    <transition name="fade-main-cont">
        <div v-if="showContainer" class="fixed top-0 left-0 right-0 bottom-0 z-[100] w-full bg-[#0B3B60] h-full flex items-center justify-center">
            <transition name="fade-main-anim">
                <div v-if="showMainLogo" class="mx-auto my-auto">
                    <NuxtImg src="/img/logo.webp" width="290" height="163" alt="logo"/>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default{
    name: 'TheMainAnimation',
    data() {
        return {
            showMainLogo: false,
            showContainer: true,
        }
    },
    mounted() {
        this.showMainLogo = true
        setTimeout(() => {
            this.showContainer = false
        }, 3000)
    }
}
</script>
<style lang="scss">
.fade-main-anim-enter-active, .fade-main-anim-leave-active {
    transition: opacity .5s ease-in-out;
}
.fade-main-anim-enter, .fade-main-anim-leave-to{
    opacity: 0;
}
.fade-main-cont-enter-active, .fade-main-cont-leave-active {
    transition: opacity .5s ease-in-out;
}
.fade-main-cont-enter, .fade-main-cont-leave-to{
    opacity: 0;
}
</style>