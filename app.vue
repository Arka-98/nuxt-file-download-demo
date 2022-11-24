<template>
  <div>
    <NuxtPage />
    <input type="text" name="cookieInput" v-model="input" id="">
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script setup lang="ts">
const input = ref('')
const cookie = useCookie('session', { encode: (value) => btoa(value), maxAge: 5 })

// watchEffect(() => console.log(cookie.value))

const handleSubmit = (e: MouseEvent) => {
  cookie.value = input.value
}

</script>
