<template>
    <demo-button @click="show = !show">Показать</demo-button>
    <br>
    <transition name="bounce">
        <img v-if="show" src="https://lh3.ggpht.com/Lx4XyKEnGxq-AFIwDKwxcWq9DZxq0I4__ux8q8vyxHQkte7B1zoSEX5wsU4cJlpbJyk=w80" alt="img">
    </transition>
</template>

<script setup>
import DemoButton from './DemoButton.vue'
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave-active {
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
