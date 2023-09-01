<template>
    <transition name="popup">
        <div
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 max-w-sm w-full py-12 px-12 z-50 bg-white rounded-xl"
            v-show="show"
        >
            <h3 class="text-center font-medium text-xl">
                Congratulations! Your account has been verified
            </h3>
            <router-link :to="{ name: 'login' }" class="w-full"
                ><black-button class="w-full">Login</black-button></router-link
            >
        </div>
    </transition>
</template>

<script setup>
import BlackButton from '@/components/buttons/BlackButton.vue'
const props = defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
    transition: 0.5s all;
}

.popup-enter-from,
.popup-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
    border-radius: 1px;
}

.popup-enter-to,
.popup-leave-from {
    opacity: 1;
    transform: translate(-50%, -50%);
    border-radius: 12px;
}
</style>
