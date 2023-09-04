<template>
    <div class="flex flex-col">
        <input
            v-model="phoneNumber"
            id="phone"
            v-mask="'+38 (0##) ###-##-##'"
            :placeholder="$t('form.placeholderPhone')"
            class="p-3 rounded focus:border-[#728A9C] border border-[#DFDFE8] outline-none h-[50px]"
            :class="{
                '!border-[#F43F30]': error,
            }"
            @input="onInput"
        />
        <span
            v-if="error"
            class=" text-[#F43F30] text-xs font-fixel mt-1"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
    name: 'PhoneInput',
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        error: {
            type: Boolean
        },
        errorMessage: {
            type: String
        }
    },
    directives: {
        mask
    },
    data() {
        return {
            phoneNumber: '',
        };
    },
    created() {
        this.phoneNumber = this.value
    },
    methods: {
        onInput() {
            this.$emit('input', this.phoneNumber)
        }
    }
};
</script>