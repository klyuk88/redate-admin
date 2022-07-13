<script setup>
import { ref } from 'vue'
import ComplaintsHeader from './components/ComplaintsHeader.vue'

const count = ref(12)
</script>

<template>
  <div class="complaints">
    <div class="complaints__header">
      <ComplaintsHeader title="Жалобы на пользователей" :count="count" />
    </div>
  </div>
</template>
