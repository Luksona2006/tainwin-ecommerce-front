<template>
    <div
        class="w-full static xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/3 xl:px-20 xl:py-0 py-12 px-8 flex justify-between items-center xl:flex-row flex-col xl:gap-0 gap-10"
    >
        <text-template />
        <Form
            @submit.prevent
            class="sm:max-w-2xl max-w-none w-full sm:grid sm:grid-cols-2 gap-4 items-start 2xl:mr-32 mr-0"
        >
            <div class="w-full flex flex-col gap-2">
                <the-input
                    input-name="first_name"
                    title="First Name"
                    placeholder="Enter your first name"
                    validation-rules="required|min:3,First Name|max:16,First Name|alpha"
                />
                <the-input
                    input-name="email"
                    title="Email"
                    placeholder="Write down your email address"
                    validation-rules="required|email"
                />
                <the-input
                    input-name="password"
                    title="Password"
                    placeholder="Enter your password"
                    validation-rules="required|min:8,Password|max:36"
                />
            </div>
            <div class="w-full flex flex-col gap-2">
                <the-input
                    input-name="last_name"
                    title="Last Name"
                    placeholder="Enter your last name"
                    validation-rules="required|min:3,Name|max:16,Last Name|alpha"
                />
                <div class="w-full flex flex-col gap-[1px] items-start">
                    <label class="text-xl font-semibold" for="phone">Phone Number</label>
                    <vue-tel-input
                        v-model="phone"
                        @validate="validatePhoneNumber"
                        v-bind="phoneBindings"
                        @country-changed="saveDialCode"
                    ></vue-tel-input>
                    <span
                        class="text-sm text-[#DC3545] font-normal opacity-0"
                        :class="{ 'opacity-100': isPhoneNumberValid === false }"
                        >Field shouldn't be empty</span
                    >
                </div>
                <the-input
                    input-name="password_confirmation"
                    title="Password Confirmation"
                    placeholder="Confirm your password"
                    validation-rules="required|confirmed:@password"
                />
            </div>

            <router-link :to="{ name: 'login' }" class="opacity-50 font-medium col-span-2"
                >I Already have account</router-link
            >

            <black-button class="w-full mt-4 col-span-2">Signup</black-button>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'

import TheInput from '@/components/form/TheInput.vue'
import BlackButton from '@/components/buttons/BlackButton.vue'
import TextTemplate from '@/components/TextTemplate.vue'

const phoneNumber = ref(null)
const isPhoneNumberValid = ref(null)
const dialCode = ref(null)

const phoneBindings = {
    mode: 'international',
    disabledFetchingCountry: false,
    disabledFormatting: false,
    enabledCountryCode: true,
    validCharactersOnly: true,
    name: 'phone',
    maxLen: 30,
    inputOptions: {
        showDialCode: true
    }
}
function validatePhoneNumber(object) {
    isPhoneNumberValid.value = object.valid
    console.log(object)
}

function saveDialCode(object) {
    dialCode.value = object.dialCode
}
</script>

<style>
.vti__input {
    width: 100%;
    min-height: 46px;
    font-size: 1.125rem;
    font-weight: 500;
    outline: none;
    padding: 0.5rem;
    border: 1px black solid;
}

.vue-tel-input {
    width: 100%;
}

.vti__dropdown {
    padding: 0.5rem;

    border-width: 1px 0px 1px 1px;
    border-color: black;
    border-style: solid;
}

.vti__input::placeholder {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
}

.vti__dropdown-list {
    max-width: 328px;
    border-radius: 0 0 10px 10px;
    max-height: 124px;
}

.vti__dropdown-list.below {
    top: 100%;
}
</style>
