<script setup>
import DeletedChatListItem from './DeletedChatListItem.vue'

defineProps({
  deletedChats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="deleted__chats">
    <DeletedChatListItem
      v-for="(chatinfo, index) in deletedChats"
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
