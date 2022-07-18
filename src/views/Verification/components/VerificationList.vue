<script setup>
import VerificationListItem from './VerificationListItem.vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="verification-list">
    <VerificationListItem
      v-for="(item, idx) in list"
      :id="idx"
      :key="idx"
      :item="item"
      class="verification-list__item"
    />
  </div>
</template>

<style lang="scss">
.verification-list {
  width: 100%;
  height: calc(100vh - 135px);

  &__item {
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
