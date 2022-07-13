<script setup>
import { ref, computed } from 'vue'
import { useComplaintsStore } from './store/Complaints.js'
import Scrollbar from '@/components/Scrollbar'
import ComplaintsHeader from './components/ComplaintsHeader.vue'
import ComplaintsList from './components/ComplaintsList.vue'

const complaintsStore = useComplaintsStore()

const count = ref(12)

const complaints = computed(() => complaintsStore.complaints)
</script>

<template>
  <div class="complaints">
    <div class="complaints__header">
      <ComplaintsHeader title="Жалобы на пользователей" :count="count" />
    </div>
    <div class="complaints__content">
      <Scrollbar>
        <ComplaintsList :complaints="complaints" class="complaints__list" />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.complaints {
  &__content {
    margin-top: 20px;
  }

  &__list {
    padding-right: 30px;
  }
}
</style>
