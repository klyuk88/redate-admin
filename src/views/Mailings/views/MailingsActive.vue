<script setup>
import { computed } from 'vue'
import { useMailingsStore } from '../store/Mailings'
import Scrollbar from '@/components/Scrollbar'
import MailingsActiveList from '../components/MailingsActiveList.vue'

const mailingsStore = useMailingsStore()

const mailings = computed(() => mailingsStore.activeMailings)
</script>

<template>
  <div class="mailings-active">
    <div class="mailings-active__content">
      <Scrollbar>
        <MailingsActiveList
          class="mailings-active__list"
          :mailings="mailings"
        />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-active {
  height: 100%;
  border-left: 1px solid rgba($white, 0.066);
  border-right: 1px solid rgba($white, 0.066);
  padding: 36px 48px 0 48px;
}
</style>
