<template>
  <ReloadPrompt></ReloadPrompt>
</template>
<route lang="yaml">
meta:
  layout: default
</route>
<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import axios from 'axios'
axios.get('/api/get').then((res) => {
  console.log(res)
})
onMounted(() => {
  registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('need refresh')
    },
    onRegisteredSW(url, registration) {
      console.log(url, registration)
      setInterval(() => {
        registration?.update()
      }, 1000)
      console.log('registered')
    }
  })
})
</script>

<style lang="scss" scoped></style>
