<script setup>
import ComplaintsHeader from '../Complaints/components/ComplaintsHeader.vue'
import BlockList from './components/BlockList.vue'
import { computed, ref } from 'vue'
import { useBlockingStore } from './store/Blocking'
import Scrollbar from '@/components/Scrollbar/Scrollbar.vue'

const blockedStore = useBlockingStore()
const blockeds = computed(() => blockedStore.blocked)
const count = ref(89)
</script>

<template>
  <div class="blocking__header">
    <ComplaintsHeader
      class="title"
      title="Заблокированные пользователи"
      :count="count"
    />
  </div>
  <div class="blockeds">
    <Scrollbar>
      <BlockList :blockeds="blockeds" />
    </Scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.blocking__header {
  margin-bottom: 20px;
  .title {
    width: 913px;
  }
}
</style>
