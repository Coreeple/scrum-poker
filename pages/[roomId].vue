<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Plus, Smile, Check, ChevronsUpDown } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
        <Button variant="secondary">Invite</Button>
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
</template>