<script setup>
import MessageList from './components/MessageList.vue'
import UserChatHeader from './components/UserChatHeader.vue'
import { computed } from 'vue'
import { useChatData } from './store/ChatData'
import Scrollbar from '../../components/Scrollbar/Scrollbar.vue'

const chatDataStore = useChatData()
const chatfulldata = computed(() => chatDataStore.chatdata)
</script>

<template>
  <div class="users__chat">
    <UserChatHeader />
    <Scrollbar class="chat__list">
      <MessageList :chatfulldata="chatfulldata" class="list" />
    </Scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.users__chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .chat__list {
    margin-left: 60px;
    .list {
      margin-right: 84px;
    }
  }
}
</style>
