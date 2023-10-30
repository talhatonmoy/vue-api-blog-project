<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: "Your Title Goes Here"
    },
    desc: {
        type: String,
    }
})
</script>

<template>
    <div
        class="relative flex items-center p-0 m-4 overflow-hidden bg-center bg-cover rounded-2xl bg-gradient-to-tl from-purple-700 to-pink-500 ">
        <img src="../../../src/assets/img/shapes/waves-white.svg" alt="pattern-lines"
            class="absolute top-0 left-0 w-full opacity-60">
        <div class="container pt-24 pb-48 z-2 lg:pb-40">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 mx-auto text-center shrink-0 md:flex-0 md:w-1/2">
                    <h1 class="text-white text-4xl">{{ props.title }}</h1>
                    <p v-if="props.desc" class="text-white">{{ props.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>