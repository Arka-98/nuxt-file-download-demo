<template>
    <div>
        <h1>Hey there!</h1>
        <EmitExample @inline-click="handleInline" />
        <img :src="imgPath" />
        <button @click="handleClick">Change Pic</button>
    </div>
</template>

<script setup lang="ts">
const imgPath = ref('/_nuxt/assets/img/nuxt3.png')
const handleInline = () => console.log('inline emit called')

const handleClick = async () => {
    await $fetch('/api/get-img')
}
</script>

<style scoped></style>