<template>
    <header class="w-full flex items-center justify-between px-12 py-6 bg-[#E8D3C5]">
        <h1 class="text-4xl font-black">Tainwin</h1>
        <nav>
            <ul class="flex items-center gap-10">
                <the-link route-name="home">Home</the-link>
                <the-link route-name="home">Favourites</the-link>
                <the-link route-name="home">Card</the-link>
                <the-link route-name="home">Account</the-link>
                <router-link :to="{ name: 'login' }"><the-button>Login</the-button></router-link>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import TheLink from '@/components/navigation/TheLink.vue'
import TheButton from '@/components/buttons/TheButton.vue'
</script>
