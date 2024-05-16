<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, Smile, Check, ChevronsUpDown } from 'lucide-vue-next'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ref } from 'vue'

import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const pokerTypes = [
  { value: 'fibonacci', label: 'Fibonacci' },
  { value: 't-shirt-size', label: 'T-Shirt Size' },
  { value: 'modified-fibonacci', label: 'Modified Fibonacci' },
]

const open = ref(false)
const value = ref('fibonacci')
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-3">
      <Textarea />
    </div>
    <div class="">
      <Popover v-model:open="open" class="w-full">
        <PopoverTrigger as-child>
          <Button variant="outline" role="combobox" :aria-expanded="open" class="w-full justify-between">
            {{ value
              ? pokerTypes.find((pokerType) => pokerType.value === value)?.label
              : "Select Poker Type..." }}
            <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-full p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                <CommandItem v-for="pokerType in pokerTypes" :key="pokerType.value" :value="pokerType.value" @select="(ev) => {
                  if (typeof ev.detail.value === 'string') {
                    value = ev.detail.value
                  }
                  open = false
                }">
                  {{ pokerType.label }}
                  <Check :class="cn(
                    'ml-auto h-4 w-4',
                    value === pokerType.value ? 'opacity-100' : 'opacity-0',
                  )" />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    <div class="col-span-3">

    </div>
    <div class="">

      <Card>
        <CardContent class="pt-6">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                Mehmet
              </div>
              <div>
                <Smile class="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                Mehmet
              </div>
              <div>
                <Smile class="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                Mehmet
              </div>
              <div>
                <Smile class="h-4 w-4 text-green-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>

  </div>
</template>