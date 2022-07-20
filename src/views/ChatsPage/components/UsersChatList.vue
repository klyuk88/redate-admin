<script setup>
import ChatListItem from './UsersChatListItem.vue'

defineProps({
  usersChats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="deleted__chats">
    <ChatListItem
      v-for="(chatinfo, index) in usersChats"
      :key="index"
      :chatinfo="chatinfo"
    />
  </div>
</template>

<style lang="scss" scoped>
.deleted__chats {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 665px);
}
</style>
