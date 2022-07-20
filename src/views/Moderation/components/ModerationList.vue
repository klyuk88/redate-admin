<script setup>
import ModerationListItem from './ModerationListItem.vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="moderation-list">
    <ModerationListItem
      v-for="(item, idx) in list"
      :id="idx"
      :key="idx"
      :item="item"
      class="moderation-list__item"
    />
  </div>
</template>

<style lang="scss">
.moderation-list {
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
