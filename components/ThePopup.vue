<template> 
    <div class="w-full  bg-black/30 z-50 fixed top-0 left-0 right-0 bottom-0" >
        <div class=" md:rounded-xl overflow-auto max-h-screen max-w-[912px] w-full my-0 mx-auto fixed md:top-1/2 md:left-1/2 md:bottom-[initial] md:-translate-x-1/2 md:-translate-y-1/2 left-0 top-0 bottom-0 h-full md:h-auto">
            <div class="flex h-full w-full bg-white">
                <div class="w-1/3 hidden md:flex">
                    <img src="~/static/img/IMG_0973.webp" width="320" height="712" alt="img" class=" object-cover w-full">
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
                        <h2 class="text-[#4E4747] text-2xl pb-2 lg:text-[32px] md:text-[28px] font-semibold font-[montserrat] mt-auto">
                            Заповніть форму
                        </h2>
                        <p class="text-[#4E4747] text-lg font-medium font-fixel pb-10">
                            і ми підберемо для Вас найкращий варіант
                        </p>
                        <form 
                            class="flex flex-col gap-4 w-full md:mb-12 mb-auto"
                            @submit.prevent="onSubmit"
                        >
                            <div class="">
                                <input 
                                    v-model="state.name" 
                                    type="text"
                                    placeholder="Ваше ім’я"
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
                                    placeholder="Ваше місто"
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
                                    placeholder="Пошта"
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
                                    placeholder="Якщо бажаєте - напишіть, що саме цікавить" 
                                    rows="5" 
                                    name="text"
                                    class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] р-агдд outline-none"
                                
                                />
                            </div>
                            <button 
                                type="submit"
                                class="bg-[#F8B1AB] mt-[100px] border-2 border-[#F8B1AB] hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] py-3 px-9 rounded text-white font-fixel transition-colors"
                            >
                                Відправити повідомлення
                            </button>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from "@nuxtjs/composition-api"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
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
        const state = reactive({
            name: '',
            telephone: '',
            city:'',
            mail:'',
            text:'',
        })
        const rules = computed(() => ({
            name: {
                required: helpers.withMessage("Ім'я обьявязкове до заповнення", required)
            },
            telephone: {
                required: helpers.withMessage("Телефон обьявязковий до заповнення", required)
            },
            city: {
                required: helpers.withMessage("Місто обьявязкове до заповнення", required)
            },
            mail: {
                required: helpers.withMessage("Пошта обьявязкове до заповнення", required)
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
        async onSubmit() {
            this.v$.$touch();
            if (this.v$.$error) {
                return
            }
            try {
                await axios.post('https://api.telegram.org/bot6659606247:AAFBCNDr-azeA77gj4bFGhhIoDAzkrGtsbY/sendMessage', {
                    chat_id: '-930274697',
                    parse_mode: 'html',
                    text: `Имя отправителя: ${this.state.name}, Номер телефона: ${this.state.telephone}, Місто: ${this.state.city}, Пошта: ${this.state.mail}, Коментарі: ${this.state.text}`
                })
                this.$emit('successSend')
                console.log('submit');
                
            } catch (error) {
                this.$emit('errorSend')
                console.error(error)
            }
        },
    }
}
</script>