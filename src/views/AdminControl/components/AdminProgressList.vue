<script setup>
import AdminProgressListItem from './AdminProgressListItem.vue'

defineProps({
  progressFullData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="progress__list">
    <AdminProgressListItem
      v-for="(progressData, index) in progressFullData"
      :key="index"
      :progress-data="progressData"
    />
  </div>
</template>

<!-- <style lang="scss" scoped>
.progress__list {

}
</style> -->
