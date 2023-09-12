<template>
    <div
        data-aos="fade-up" data-aos-delay="100"
        class="border border-[#D9D9D9] hover:border-[#F9F9FB] hover:shadow lg:px-[63px] md:px-6 px-4 py-8 my-0 md:mx-0 mx-auto"
    >
        <span class="lg:text-lg text-base text-[#2B2B2B] font-fixel font-medium">
            {{ item.title }}
        </span>
        <ul class="p-2 font-fixel text-[15px] font-normal text-[#2B2B2B] castom-list">
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
        <p class="font-fixel text-[15px] font-normal  text-[#2B2B2B] pb-4">
            {{ item.text5 }}
            <span class="font-montserrat text-[#0B3B60] font-semibold lg:text-2xl">
                {{ item.price }}
            </span>
        </p>
        <div 
            class="flex md:max-w-[368px] relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-transparent hover:after:bg-[#00000033]/20 after:transition-colors before:transition-opacity before:content-[''] before:absolute before:-translate-y-1/2 before:-translate-x-1/2 before:top-[50%] before:left-[50%] before:opacity-0 before:bg-search before:w-[24px] before:h-[24px] before:bg-cover hover:before:z-10 cursor-pointer hover:before:opacity-100" 
            @click="previewImgObject"
        >
            <NuxtImg
                :src="item.url"
                width="732"
                height="302"
                format="webp"
            />
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import { api as viewerApi } from "v-viewer"

export default{
    name: 'TheBestOffersItem',
    components: {
        // Viewer,
    },
    props:{
        item:{
            type: Object,
            required: true,
        }
    },
    computed: {
        sourceImageObjects() {
            return [{
                'src': this.item.url,
                'data-source': this.item.url
                // 'data-source': require('~/static/img/Rectangle_12.webp')
            }]
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
        },
        previewImgObject () {
        // Or you can just import the api method and call it.
        const $viewer = viewerApi({
          options: {
            toolbar: true,
            url: 'data-source',
          },
          images: this.sourceImageObjects
        })
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