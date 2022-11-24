<template>
    <div>
        <h1>Hey there!</h1>
        <EmitExample @inline-click="handleInline" />
        <img :src="imgPath" />
    </div>
</template>

<script setup lang="ts">
const imgPath = ref('/_nuxt/assets/img/nuxt3.png')
const handleInline = () => console.log('inline emit called')

</script>

<style scoped></style>