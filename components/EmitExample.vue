<template>
    <div>
        <button @click="handleClick">Inline Event Emitter</button>
        <div id="toggle-div" v-if="show">
            <p>Hidden text here!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'inline-click'): void
}>()

const show = ref(false)

const handleClick = () => {
    show.value = !show.value
    emit('inline-click')
}
</script>