<script setup>
import UsersChatList from './components/UsersChatList.vue'
import DeletedChatList from './components/DeletedChatList.vue'
import ChatHeader from '../SupportChat/components/ChatHeader.vue'
import Scrollbar from '../../components/Scrollbar/Scrollbar.vue'
import { useUsersChats } from './store/usersChats'
import { computed } from 'vue'

const usersChatsStore = useUsersChats()
const usersChatsList = computed(() => usersChatsStore.usersChats)
const deletedChatsList = computed(() => usersChatsStore.deletedChats)
</script>

<template>
  <ChatHeader title="Диалоги пользователя" />
  <div class="da">
    <Scrollbar>
      <UsersChatList :users-chats="usersChatsList" />
    </Scrollbar>
  </div>
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
