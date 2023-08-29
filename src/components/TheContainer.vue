<template>
    <the-header />
    <div class="max-w-[1920px] m-auto px-12">
        <slot> </slot>
    </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped></style>
