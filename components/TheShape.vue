<template>
    <div class=" w-full max-w-[1440px] mt-[60px] md:mt-[80px] lg:mt-[120px] mx-auto">
        <div class=" max-w-[1240px] my-0 mx-auto px-4 md:px-8 lg:px-[104px]">
            <div class="flex flex-col md:flex-row gap-5 lg:gap-[126px]">
                <div class="lg:max-w-[400px] md:max-w-[340px]">
                    <h3 class=" font-fixel font-extralight text-xl md:text-[28px] lg:text-[32px] md:leading-10 text-[#2B2B2B]">
                        Бажаєте стати нашим щасливим клієнтом?
                        Ми вже чекаємо вашого повідомлення!
                    </h3>
                </div>
                <form 
                    class="flex flex-col gap-4 w-full"
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
</template>

<script>
import ThePhoneInput from '~/components/ThePhoneInput.vue';
import { reactive, computed } from "@nuxtjs/composition-api"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import TheThanks from './TheThanks.vue';
import TheError from './TheError.vue';
import axios from 'axios';
    export default{
        name: 'TheShape',
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