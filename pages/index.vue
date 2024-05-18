<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <div class="">
    <h3 class="mb-2">Select a poker type</h3>
    <RadioGroup default-value="fibonacci" class="grid grid-cols-3 gap-4 ">
      <div>
        <RadioGroupItem id="fibonacci" value="fibonacci" class="peer sr-only" />
        <Label for="fibonacci"
          class="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <img class="h-28 w-28 mb-2" src="~/assets/icons/fibonacci.svg" />
          Fibonacci
        </Label>
      </div>
      <div>
        <RadioGroupItem id="modified-fibonacci" value="modified-fibonacci" class="peer sr-only" />
        <Label for="modified-fibonacci"
          class="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <img class="h-28 w-28 mb-2" src="~/assets/icons/modified-fibonacci.svg" />
          Modified Fibonacci
        </Label>
      </div>
      <div>
        <RadioGroupItem id="t-shirt-sizing" value="t-shirt-sizing" class="peer sr-only" />
        <Label for="t-shirt-sizing"
          class="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <img class="h-28 w-28 mb-2" src="~/assets/icons/t-shirt-sizing.svg" />
          T-Shirt Sizing
        </Label>
      </div>
    </RadioGroup>
  </div>

  <Button>
    <Plus class="w-4 h-4 mr-2" /> Create Room
  </Button>
</template>