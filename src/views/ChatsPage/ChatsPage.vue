<script setup>
import DeletedChatList from './components/DeletedChatList.vue'
import ChatHeader from '../SupportChat/components/ChatHeader.vue'
import Scrollbar from '../../components/Scrollbar/Scrollbar.vue'
import { useUsersChats } from './store/usersChats'
import { computed } from 'vue'
import UsersChats from './views/UsersChats.vue'

const usersChatsStore = useUsersChats()
const deletedChatsList = computed(() => usersChatsStore.deletedChats)
</script>

<template>
  <ChatHeader title="Диалоги пользователя" />
  <UsersChats />
  <div class="da">
    <ChatHeader title="Удаленные диалоги пользователя " class="header" />
    <Scrollbar>
      <DeletedChatList :deleted-chats="deletedChatsList" />
    </Scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 35px;
}
.da {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
