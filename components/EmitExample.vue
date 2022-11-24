<template>
    <div>
        <button @click="$emit('inline-click')">Inline Event Emitter</button>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'inline-click'): void
}>()
</script>