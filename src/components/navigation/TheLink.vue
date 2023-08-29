<template>
    <li class="sm:text-lg text-base font-medium hover:-translate-y-0.5 transition-all duration-300">
        <router-link :to="{ name: routeName }"><slot></slot></router-link>
    </li>
</template>

<script setup>
const props = defineProps({
    routeName: {
        type: String,
        required: true
    }
})
</script>
