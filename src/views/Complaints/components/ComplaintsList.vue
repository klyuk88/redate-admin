<script setup>
import ComplaintsListItem from './ComplaintsListItem.vue'

defineProps({
  complaints: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="complaints-list">
    <ComplaintsListItem
      v-for="(complaint, idx) in complaints"
      :key="idx"
      :complaint="complaint"
      class="complaints-list__item"
    />
  </div>
</template>

<style lang="scss">
.complaints-list {
  width: 100%;
  height: calc(100vh - 135px);

  &__item {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
