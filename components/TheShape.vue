<template>
    <div class=" w-full max-w-[1440px] mt-[60px] md:mt-[80px] lg:mt-[120px] mx-auto">
        <div class=" max-w-[1240px] my-0 mx-auto px-4 md:px-8 lg:px-[104px]">
            <div class="flex flex-col md:flex-row gap-5 lg:gap-[126px]">
                <div class="lg:max-w-[400px] md:max-w-[340px]">
                    <h3 class=" font-fixel font-extralight text-xl md:text-[28px] lg:text-[32px] md:leading-10 text-[#2B2B2B]">
                        {{ $t('shape.title') }}
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
                        :placeholder="$t('shape.name')"
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
                            :placeholder="$t('shape.city')"
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
                            :placeholder="$t('shape.mail')"
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
                            :placeholder="$t('shape.text')" 
                            rows="5" 
                            name="text"
                            class="p-3 w-full rounded focus:border-[#728A9C] border border-[#DFDFE8] р-агдд outline-none"
                        
                        />
                    </div>
                    <button 
                        type="submit"
                        class="bg-[#F8B1AB] mt-[100px] border-2 border-[#F8B1AB] hover:bg-white hover:border-2 hover:border-[#F8B1AB] hover:text-[#F8B1AB] active:bg-white active:border-2 active:border-[#F28B82] active:text-[#F28B82] py-3 px-9 rounded text-white font-fixel transition-colors"
                    >
                        {{ $t('shape.button') }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ThePhoneInput from '~/components/ThePhoneInput.vue';
import { reactive, computed, useContext } from "@nuxtjs/composition-api"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email } from '@vuelidate/validators'
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
                
            } catch (error) {
                this.$emit('errorSend')
                console.error(error)
            }
        },
    }
}
</script>