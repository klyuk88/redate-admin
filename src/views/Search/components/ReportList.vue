<script setup>
import ReportItem from './ReportItem.vue'

defineProps({
  reportsFullData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="report__list">
    <ReportItem
      v-for="(reportsData, index) in reportsFullData"
      :key="index"
      :reportsData="reportsData"
    />
  </div>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
