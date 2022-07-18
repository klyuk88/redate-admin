<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="verification-list-item">{{ item }}</div>
</template>

<style lang="scss">
.verification-list-item {
}
</style>
