<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Plus, Smile, Check, ChevronsUpDown } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const sofiaRole = ref('Owner')
const jacksonRole = ref('Member')
</script>

<template>
  <Card>
    <CardHeader class="grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0">
      <div class="">
        <CardTitle>Developers</CardTitle>
        <CardDescription>
          Invite your team members.
        </CardDescription>
      </div>
      <div class="text-right">
        <Button size="sm" variant="secondary">Invite</Button>
      </div>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatars/01.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">
              Sofia Davis
            </p>
            <p class="text-sm text-muted-foreground">
              m@example.com
            </p>
          </div>
        </div>

      </div>
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatars/02.png" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">
              Jackson Lee
            </p>
            <p class="text-sm text-muted-foreground">
              p@example.com
            </p>
          </div>
        </div>

      </div>
    </CardContent>
  </Card>

  <Button>
    Start
  </Button>
  <Button>
    Open
  </Button>
  
  <Carousel class="relative w-full max-w-md" :opts="{
    align: 'start',
  }">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 13" :key="index" class="md:basis-1/2 lg:basis-1/4">
        <div class="p-1">
          <Card>
            <CardContent class="flex h-32 items-center justify-center p-0">
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>

  <Button>
    Submit
  </Button>
</template>