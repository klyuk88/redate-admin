<script setup>
import ChatList from '@/views/SupportChat/components/ChatList.vue'
import ChatHeader from '@/views/SupportChat/components/ChatHeader.vue'
import { useSupportChat } from '../SupportChat/store/SupportChat'
import { computed } from 'vue'
import Scrollbar from '../../components/Scrollbar/Scrollbar.vue'

const chatinfoStore = useSupportChat()
const chatinfolist = computed(() => chatinfoStore.chatinfo)
</script>

<template>
  <div class="users__chat">
      <ChatHeader title="Удаленные диалоги пользователя"/>
      <Scrollbar class="chat__list">
        <ChatList class="list" :chatinfolist="chatinfolist" />
      </Scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.users__chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   .list {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//   }
    .chat__list {
        margin-left: 60px;
        .list {
          margin-right: 84px;
        }
    }
}
</style>
