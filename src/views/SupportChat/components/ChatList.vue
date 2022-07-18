<script setup>
import ChatListItem from './ChatListItem.vue'
defineProps({
  chatinfolist: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="chat__list" >
      <ChatListItem v-for="(chatinfo, index) in chatinfolist " 
      :key="index"
      :chatinfo="chatinfo" />
  </div>
</template>

<style lang="scss" scoped>
    .chat__list {
          width: 100%;
  height: calc(100vh - 135px);
    }
</style>
