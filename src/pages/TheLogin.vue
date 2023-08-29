<template>
    <div
        class="w-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 px-12 flex justify-between items-start"
    >
        <div class="flex flex-col gap-1 items-start">
            <h1 class="text-8xl font-black">Tainwin</h1>
            <p class="text-3xl font-medium">
                Place where you are <span class="font-semibold">COMFORTABLE!</span> <br />
                for <span class="font-semibold">THE BEST MEMORIES</span> you need <br /><span
                    class="font-semibold"
                    >APPROPRIATE THINGS</span
                >
            </p>
        </div>
        <Form @submit.prevent class="max-w-sm w-full flex flex-col gap-5 items-start mr-60">
            <the-input
                input-name="email"
                title="Email"
                placeholder="Enter your email address"
                validation-rules="required|email"
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
                    >Don't have account yet</router-link
                >
            </div>
            <black-button class="w-full mt-4">Login</black-button>
        </Form>
    </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import TheInput from '@/components/form/TheInput.vue'
import BlackButton from '@/components/buttons/BlackButton.vue'
</script>
