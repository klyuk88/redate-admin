<script setup>
import Scrollbar from '../../../components/Scrollbar/Scrollbar.vue'
import UsersChatList from '../components/UsersChatList.vue'
import { computed } from 'vue'
import { useUsersChats } from '../store/usersChats'

const chatsStore = useUsersChats()

const chats = computed(() => chatsStore.usersChats)
</script>

<template>
  <div>
    <div class="da">
      <Scrollbar class="scroll">
        <UsersChatList :users-chats="chats" class="list"/>
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.da {
  width: 1040px;
}
.scroll {
    margin-right: 115px;
}
.list {
    margin-left: 55px;
}
</style>
