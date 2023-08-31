<template>
    <div class="w-full flex flex-col gap-0.5 items-start">
        <label class="text-xl font-semibold" :for="inputName">{{ title }}</label>
        <Field
            class="w-full text-lg font-medium placeholder:text-base placeholder:font-semibold border border-black outline-none py-2 px-2"
            :rules="validationRules"
            :name="inputName"
            :type="inputType"
            :placeholder="placeholder"
        />
        <div class="flex">
            <ErrorMessage :name="inputName" class="text-sm text-[#DC3545] font-normal" />
            <p class="text-sm font-normal opacity-0">E</p>
        </div>
    </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    inputName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: false,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: false
    },
    validationRules: {
        type: String,
        required: false
    }
})
</script>
