<script setup lang="ts">
import { useWebSocket } from '@vueuse/core';


// In prod: check if secure, then use wss://
const { status, data, send, open, close } = useWebSocket(`wss://${location.host}/_ws?room=123`, {
  autoReconnect: {
    retries: 3,
    delay: 3000,
    onFailed() {
      alert('Failed to connect WebSocket after 3 retries')
    },
  },
  heartbeat: {
    message: 'ping',
    interval: 1000,
    pongTimeout: 1000,
  },
})

const roomInfo = ref<string>("")

watch(data, (newValue) => {
  console.log(data.value)
  if(data.value !== "pong"){
    roomInfo.value = data.value
  }
})

const message = ref('')
function sendData() {
  console.log("ok")
  send(message.value)
}
</script>

<template>
  <div>
    {{ status }} <br> {{ roomInfo }}
    <h1>WebSocket - let's go!</h1>
    <form @submit.prevent="sendData">
      <input v-model="message">
      <button type="submit">Send</button>
    </form>
  </div>
</template>