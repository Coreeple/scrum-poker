<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const pokerTypes = [
  { "text": "Fibonacci", "value": "fibonacci", "icon": "fibonacci.svg" },
  { "text": "Modified Fibonacci", "value": "modified-fibonacci", "icon": "modified-fibonacci.svg" },
  { "text": "T-Shirt Sizing", "value": "t-shirt-sizing", "icon": "t-shirt-sizing.svg" },

]
const defaultPokerType = "fibonacci"
const pokerType = ref(defaultPokerType)


</script>

<template>
  <div>
    <WebSocket />
    <WebSocket />
    <h3 class="mb-2">Select a poker type</h3>
    <RadioGroup v-model="pokerType" :default-value="defaultPokerType" class="grid grid-cols-3 gap-4 ">
      <div v-for="pokerType in pokerTypes">
        <RadioGroupItem :id="pokerType.value" :value="pokerType.value" class="peer sr-only" />
        <Label :for="pokerType.value"
          class="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <NuxtImg class="h-20 w-20 mb-2" :src="pokerType.icon" />
          {{ pokerType.text }}
        </Label>
      </div>
    </RadioGroup>
  </div>

  <Button>
    Create Room
  </Button>
</template>