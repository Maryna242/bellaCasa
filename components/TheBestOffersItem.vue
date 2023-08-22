<template>
    <div
        class="border border-[#D9D9D9] hover:border-[#F9F9FB] hover:shadow lg:px-[63px] md:px-6 px-4 py-8 my-0 md:mx-0 mx-auto"
    >
        <span class="lg:text-lg text-base text-[#2B2B2B] font-fixel font-medium">
            {{ item.title }}
        </span>
        <ul class="p-2 font-fixel text-[15px] font-light text-[#2B2B2B] castom-list">
            <li>
                {{ item.text1 }}
            </li>
            <li>
                {{ item.text2 }}
            </li>
            <li>
                {{ item.text3 }}
            </li>
            <li>
                {{ item.text4 }}
            </li>
        </ul>
        <p class="font-fixel text-[15px] font-light text-[#2B2B2B] pb-4">
            {{ item.text5 }}
            <span class="font-[montserrat] text-[#0B3B60] font-semibold lg:text-2xl">
                {{ item.price }}
            </span>
        </p>
        <div 
            class="flex md:max-w-[368px] relative hover:after:content-[''] hover:after:absolute hover:after:top-0 hover:after:right-0 hover:after:bottom-0 hover:after:left-0 hover:after:bg-[#00000033]/20 hover:after:transition-opacity hover:before:content-[''] hover:before:absolute hover:before:-translate-y-1/2 hover:before:-translate-x-1/2 hover:before:top-[50%] hover:before:left-[50%] hover:before:bg-search hover:before:w-[24px] hover:before:h-[24px] hover:before:bg-cover hover:before:z-10" 
            @click="show"
        >
            <viewer 
                class="viewer" 
                ref="viewer"
                :images="[item.url]"
                @inited="inited"
            >
                <template #default="scope">
                    <img v-for="src in scope.images" :src="src" :key="src">
                    {{scope.options}}
                </template>
            </viewer>
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"

export default{
    name: 'TheBestOffersItem',
    components: {
        Viewer,
    },
    props:{
        item:{
            type: Object,
            required: true,
        }
    },
    methods: {
        showImg() {

        },
        inited (viewer) {
            this.$viewer = viewer
        },
        show () {
            this.$viewer.show()
        }
    }
}
</script>
<style lang="scss">
.castom {
    &-list {
        li{
            padding:5px;
            font-size:16px;
        }
        
        li:before{
            content: '';
            display: inline-block;
            height: 3px;
            width: 3px;
            vertical-align: middle;
            border-radius:50%;
            background-color:#D9D9D9;
            margin-right:5px;
        }

    }
}
</style>