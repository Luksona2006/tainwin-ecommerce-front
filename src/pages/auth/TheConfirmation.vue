<template>
    <teleport to="body">
        <the-blur :show="verified" />
        <account-verified :show="verified" />
    </teleport>
    <div
        class="w-full static xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/3 xl:px-20 xl:py-0 py-12 px-8 flex justify-between items-center xl:flex-row flex-col xl:gap-0 gap-10"
    >
        <text-template />
        <Form
            @submit.prevent
            class="sm:max-w-sm max-w-none w-full gap-4 items-start xl:mr-32 mr-0"
            v-slot="{ values, errors }"
        >
            <h2 class="text-center text-2xl font-black mb-5">
                {{ title }}
            </h2>

            <the-input
                input-name="code"
                title="Code"
                placeholder="Enter recieved 6 digit code"
                validation-rules="required"
                :inputMaxLength="6"
            />
            <black-button class="w-full mt-2" @click="confirmCode(values, errors)"
                >Confirm</black-button
            >
        </Form>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Form } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import axiosInstance from '@/config/axios'

import AccountVerified from '@/components/popups/AccountVerified.vue'
import TheBlur from '@/components/popups/TheBlur.vue'
import TheInput from '@/components/form/TheInput.vue'
import BlackButton from '@/components/buttons/BlackButton.vue'
import TextTemplate from '@/components/TextTemplate.vue'

const route = useRoute()
const verified = ref(false)

const title = computed(() =>
    route.name === 'email-confirmation'
        ? '1/2 Confirm your email address'
        : '2/2 Confirm your phone number'
)

function confirmCode(values, errors) {
    if (!errors[0]) {
        const endpoint =
            route.name === 'email-confirmation' ? 'email-confirmation' : 'phone-confirmation'
        axiosInstance.post(endpoint, values).then((res) => {
            if (res.status === 200 && endpoint === 'phone-confirmation') {
                verified.value = true
            } else if (res.status === 200 && endpoint === 'email-confirmation') {
                useRouter().push({ name: 'phone-confirmation', params: { token: res.data.token } })
            }
        })
    }
}
</script>
