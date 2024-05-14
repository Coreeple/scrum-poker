<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Plus } from 'lucide-vue-next'

</script>

<template>
  <div class="container mx-auto pt-12">
    <div class="flex justify-between mb-4">
      <Button>
        <Plus class="w-4 h-4 mr-2" /> Create Room
      </Button>
    </div>
  </div>
</template>