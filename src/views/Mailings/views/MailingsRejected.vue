<script setup>
import { computed } from 'vue'
import { useMailingsStore } from '../store/Mailings'
import Scrollbar from '@/components/Scrollbar'
import MailingsRejectedList from '../components/MailingsRejectedList.vue'

const mailingsStore = useMailingsStore()

const mailings = computed(() => mailingsStore.rejectedMailings)
</script>

<template>
  <div class="mailings-rejected">
    <div class="mailings-rejected__content">
      <Scrollbar>
        <MailingsRejectedList
          class="mailings-rejected__list"
          :mailings="mailings"
        />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-rejected {
  height: 100%;
  border-left: 1px solid rgba($white, 0.066);
  border-right: 1px solid rgba($white, 0.066);
  padding: 36px 48px 0 48px;
}
</style>
