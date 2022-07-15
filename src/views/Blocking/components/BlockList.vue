<script setup>
import BlockItem from './BlockItem.vue'

defineProps({
  blockeds: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="block__list">
    <BlockItem
      v-for="(blocked, index) in blockeds"
      :key="index"
      :blocked="blocked"
    />
  </div>
</template>

<style lang="scss" scoped>
.block__list {
  width: 100%;
  height: calc(100vh - 135px);
}
</style>
