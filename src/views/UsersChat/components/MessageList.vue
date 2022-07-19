<script setup>
import MessageListItem from './MessageListItem.vue'

defineProps({
  chatfulldata: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="message__list">
    <MessageListItem
      v-for="(chatdata, index) in chatfulldata"
      :key="index"
      :chatdata="chatdata"
    />
  </div>
</template>

<style lang="scss" scoped>
.message__list {
  width: 100%;
  height: calc(100vh - 135px);
}
</style>
