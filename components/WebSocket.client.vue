<script setup lang="ts">
import { useWebSocket } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';
import { getData, setData } from 'nuxt-storage/local-storage';

const props = defineProps<{
  idiot: boolean
}>()

if (!getData('userId')) {
  setData('userId', uuidv4());
}

const userId = getData('userId')

const { status, data, send, open, close } = useWebSocket(`wss://${location.host}/_ws?roomId=123&userId=${userId}${props.idiot ? '&idiot' : ''}`, {
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

const users = ref<[]>([])

watch(data, () => {
  if (data.value !== "pong") {
    users.value = JSON.parse(data.value)
  }
})

</script>

<template>
  <div v-if="!idiot">
    <div v-if="status !== 'OPEN' || users.length === 0">
      Loading...
    </div>
    <div v-else>
      {{ status }} <br> {{ users }}
    </div>
  </div>
</template>