<template>
    <div class="flex flex-col items-center absolute w-full max-w-[890px] px-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 class="text-white font-semibold md:text-8xl text-[56px] font-sourcesans mt-[380px] sm:mt-[193px]  md:pb-2">
            Bella Casa
        </h1>
        <h2 class="text-white font-semibold font-montserrat md:text-[32px] text-2xl md:mb-[30px] text-center ">
            {{ $t('intro.title') }}
        </h2>
        <form
            class="bg-[#D9D9D942]/20 border-[1px] border-[#DFDFE84D] rounded-xl border-solid px-4 py-6 md:px-3 backdrop-blur-xl w-full max-w-[825px] order-1 md:order-none mt-[78px] md:mt-[30px]"
            @submit.prevent="onSubmit"
        >
            <p class="text-white font-fixel font-medium text-center">
                {{ $t('form.title') }}
            </p>
            <div class="gap-2 grid sm:grid-cols-3 grid-cols-1 py-3  max-w-[690px] align-top mx-auto">
                <div class="flex flex-col">
                    <input
                        v-model="state.name" 
                        type="text"
                        :placeholder=" $t('form.placeholderName')"
                        name="name"
                        class="p-3 rounded focus:border-[#728A9C] border border-[#DFDFE8] h-[50px] outline-none"
                        :class="{
                            '!border-[#F43F30]': v$.name.$error,
                        }"
                        @input="v$.name.$touch()"
                    >
                    <span
                        v-if="v$.name.$error"
                        class=" text-[#F43F30] text-xs font-fixel mt-1"
                    >
                        {{ v$.name.$errors[0].$message }}
                    </span>
                </div>
                
                <the-phone-input
                    v-model="state.telephone"
                    :error="v$.telephone.$error"
                    :error-message="v$.telephone.$error ? v$.telephone.$errors[0].$message : ''"
                    @input="v$.telephone.$touch()"
                />
                <button
                    type="submit"
                    class="bg-[#F8B1AB] p-3 rounded border-2 border-[#F8B1AB] text-white font-fixel hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] h-[50px]"
                >
                {{ $t('form.button') }}
                </button>
            </div>
            <p class="flex text-white text-sm gap-1 md:ml-[50px]">
                <NuxtImg src="/img/map-pin.webp" width="24px" height="24px" alt="map-pin"/>
                {{ $t('form.addres') }}
            </p>
        </form>
        <div class=" md:mt-12">
            <button 
                class="btn-video"
                @click="$emit('showVideo')"  
            >
                <NuxtImg :src="btnImageUrl" width="125" height="125" alt="play" class=""/> 
            </button>
        </div>
    </div>
</template>

<script>
import ThePhoneInput from '~/components/ThePhoneInput.vue';
import { reactive, computed, useContext } from "@nuxtjs/composition-api"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import TheThanks from './TheThanks.vue';
import TheError from './TheError.vue';
import axios from 'axios';

export default {
    name: 'TheForm',
    components: {
        ThePhoneInput,
        TheThanks,
        TheError
    },
    computed: {
        btnImageUrl() {
            return this._i18n.localeProperties.code === 'ua' ? '/img/Group_text.webp' : '/img/Group_en.webp'
        }
    },
    setup() {
        const ctx = useContext()
        const state = reactive({
            name: '',
            telephone: ''
        })
        const rules = computed(() => ({
            name: {
                required: helpers.withMessage(ctx.i18n.t('message.name'), required)
            },
            telephone: {
                required: helpers.withMessage(ctx.i18n.t('message.phone'), required)
            },
        }))

        const v$ = useVuelidate(rules, state)
        return { state, v$ }
    },
    data(){
        return{
            item:{
                video:'/video/Bella Casa_v2.mp4',
                type:'video'
            },
            showVideo: false,
        }
    },
    methods:{
        clearForm() {
            this.state.name = ''
            this.state.telephone = ''
            this.v$.$reset()
        },
        async onSubmit() {
            this.v$.$touch();
            if (this.v$.$error) {
                return
            }
            try {
                await axios.post('/api/submit-form', {
                    name: this.state.name,
                    phone: this.state.telephone,
                })
                this.$emit('successSend')
                this.clearForm()
            } catch (error) {
                this.$emit('errorSend')
                console.error(error)
            }
        },
    }
}
</script>
<style lang="scss">
.btn-video{
    position: relative;
    &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/Polygon.webp');
        width: 25px;
        height: 25px;
        mask-size: contain;
        background: #F8B1AB;
        mask-repeat: no-repeat;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-30%, -50%);
    }
    &:hover {
        &::before {
            background: #F28B82;
        }
    }
    &:active{
        &::before{
            background: #F28B82;
        }
    }
}
</style>