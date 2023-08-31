<template>
    <div
        class="w-full static xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/3 xl:px-20 xl:py-0 py-12 px-8 flex justify-between items-center xl:flex-row flex-col xl:gap-0 gap-10"
    >
        <text-template />
        <Form
            @submit.prevent
            class="sm:max-w-sm max-w-none w-full gap-4 items-start xl:mr-32 mr-0"
            v-slot="{ values, errors }"
        >
            <the-input
                input-name="email"
                title="Email"
                placeholder="Email or phone number"
                validation-rules="required"
            />
            <the-input
                input-name="password"
                title="Password"
                placeholder="Enter your password"
                validation-rules="required|min:8,Password"
            />
            <div class="w-full flex items-center justify-between">
                <router-link :to="{ name: 'home' }" class="opacity-50 font-medium"
                    >Forgot Password?</router-link
                >
                <router-link :to="{ name: 'signup' }" class="opacity-50 font-medium"
                    >Register account</router-link
                >
            </div>
            <black-button class="w-full mt-4" @click="loginUser(values, errors)"
                >Login</black-button
            >
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import TheInput from '@/components/form/TheInput.vue'
import BlackButton from '@/components/buttons/BlackButton.vue'
import TextTemplate from '@/components/TextTemplate.vue'

const phone = ref(null)

function loginUser(values, errors) {
    console.log(values, errors)
}
</script>
