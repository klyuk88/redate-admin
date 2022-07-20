<script setup>
import ChatHeader from './components/ChatHeader.vue'
import { ref } from 'vue'
import ChatList from './components/ChatList.vue'
import { useSupportChat } from './store/SupportChat'
import { computed } from 'vue'
import Scrollbar from '../../components/Scrollbar/Scrollbar.vue'

const count = ref(5)
const chatinfoStore = useSupportChat()
const chatinfolist = computed(() => chatinfoStore.chatinfo)
</script>

<template>
  <div class="support_chat">
    <ChatHeader :count="count" title="Обращения в тех.подержку" />
    <div class="chat__list">
      <Scrollbar>
        <ChatList class="list" :chatinfolist="chatinfolist" />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.support_chat {
  display: flex;
  flex-direction: column;
  align-items: center;
  .chat__list {
    margin-left: 60px;
    .list {
      margin-right: 84px;
    }
  }
}
</style>
