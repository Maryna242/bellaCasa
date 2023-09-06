<template> 
    <div class="w-full  bg-black/30 z-[99] fixed top-0 left-0 right-0 bottom-0" >
        <div class=" md:rounded-xl overflow-auto max-h-screen max-w-[912px] w-full my-0 mx-auto fixed md:top-1/2 md:left-1/2 md:bottom-[initial] md:-translate-x-1/2 md:-translate-y-1/2 left-0 top-0 bottom-0 h-full md:h-auto">
            <div class="flex h-full w-full bg-white">
                <div class="w-1/3 hidden md:flex">
                    <NuxtImg src="/img/IMG_0973.webp" width="320" height="712" alt="img" class=" object-cover w-full"/>
                </div>
                <div class="grow flex flex-col min-h-max overflow-auto py-4 md:py-0">
                    <div class="flex justify-end md:mt-3 md:mr-3">
                        <button
                            @click="hide"
                        >
                            <div class="w-[30px] h-[20px] flex flex-col justify-between my-4 mx-3 cursor-pointer">
                                <span 
                                    class="block h-[2px] w-full bg-[#757575] rotate-[135deg] translate-y-[8px]"
                                />
                                <span
                                    class="block h-[2px] w-full bg-[#757575] -rotate-[135deg] -translate-y-[10px]"
                                />
                            </div>
                        </button>
                    </div>
                    <div class="md:px-10 px-4 max-w-[442px] mx-auto md:max-w-full md:mx-[initial] my-auto">
                        <h2 class="text-[#4E4747] text-2xl pb-2 lg:text-[32px] md:text-[28px] font-semibold font-montserrat mt-auto">
                            {{ $t('popup.title') }}
                        </h2>
                        <p class="text-[#4E4747] text-lg font-medium font-fixel pb-10">
                            {{ $t('popup.subtitle') }}
                        </p>
                        <form 
                            class="flex flex-col gap-4 w-full md:mb-12 mb-auto"
                            @submit.prevent="onSubmit"
                        >
                            <div class="">
                                <input 
                                    v-model="state.name" 
                                    type="text"
                                    :placeholder="$t('popup.name')"
                                    name="name"
                                    class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] h-[50px] outline-none"
                                    :class="{
                                        '!border-[#F43F30]': v$.name.$error,
                                    }"
                                    @input="v$.name.$touch()"
                                />
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
                            <div class="">
                                <input 
                                    v-model="state.city" 
                                    type="text"
                                    :placeholder="$t('popup.city')"
                                    name="city"
                                    class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] h-[50px] outline-none"
                                    :class="{
                                        '!border-[#F43F30]': v$.city.$error,
                                    }"
                                    @input="v$.city.$touch()"
                                />
                                <span
                                    v-if="v$.city.$error"
                                    class=" text-[#F43F30] text-xs font-fixel mt-1"
                                >
                                    {{ v$.city.$errors[0].$message }}
                                </span>
                            </div>
                            <div class="">
                                <input 
                                    v-model="state.mail" 
                                    type="@mail"
                                    :placeholder="$t('popup.mail')"
                                    name="mail"
                                    class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] h-[50px] outline-none"
                                    :class="{
                                        '!border-[#F43F30]': v$.mail.$error,
                                    }"
                                    @input="v$.mail.$touch()"
                                />
                                <span
                                    v-if="v$.mail.$error"
                                    class=" text-[#F43F30] text-xs font-fixel mt-1"
                                >
                                    {{ v$.mail.$errors[0].$message }}
                                </span>
                            </div>
                            <div class=" h-[50px]">
                                <textarea 
                                    v-model="state.text" 
                                    type="text"
                                    :placeholder="$t('popup.text')" 
                                    rows="5" 
                                    name="text"
                                    class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] р-агдд outline-none"
                                
                                />
                            </div>
                            <button 
                                type="submit"
                                class="bg-[#F8B1AB] mt-[100px] border-2 border-[#F8B1AB] hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] py-3 px-9 rounded text-white font-fixel transition-colors"
                            >
                            {{ $t('popup.button') }}
                            </button>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed, useContext } from "@nuxtjs/composition-api"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email } from '@vuelidate/validators'
import ThePhoneInput from '~/components/ThePhoneInput.vue';
import TheThanks from './TheThanks.vue';
import TheError from './TheError.vue';
import axios from 'axios';
export default {
    name: 'ThePopup',
    components: {
        ThePhoneInput,
        TheThanks,
        TheError
    },
    setup() {
        const ctx = useContext()
        const state = reactive({
            name: '',
            telephone: '',
            city:'',
            mail:'',
            text:'',
        })
        const rules = computed(() => ({
            name: {
                required: helpers.withMessage(ctx.i18n.t('message.name'), required)
            },
            telephone: {
                required: helpers.withMessage(ctx.i18n.t('message.phone'), required)
            },
            city: {
                required: helpers.withMessage(ctx.i18n.t('message.city'), required)
            },
            mail: {
                required: helpers.withMessage(ctx.i18n.t('message.mailRequied'), required),
                email: helpers.withMessage(ctx.i18n.t('message.email'), email),
            },
        }))

        const v$ = useVuelidate(rules, state)
        return { state, v$ }
    },
    methods: {
        hide() {
            console.log('hide');
            this.$emit('close')
        },
        clearForm() {
            this.state.name = ''
            this.state.telephone = ''
            this.state.city = ''
            this.state.mail = ''
            this.state.text = ''
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
                    city: this.state.city,
                    email: this.state.mail,
                    message: this.state.text,
                })
                this.$emit('successSend')
                this.clearForm()
                this.$emit('close')
                
            } catch (error) {
                this.$emit('errorSend')
                console.error(error)
            }
        },
    }
}
</script>