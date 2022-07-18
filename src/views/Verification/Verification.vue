<script setup>
import { ref, computed } from 'vue'
import { useVerificationStore } from './store/Verification.js'
import Scrollbar from '@/components/Scrollbar'
import VerificationHeader from './components/VerificationHeader.vue'
import VerificationList from './components/VerificationList.vue'

const verificationStore = useVerificationStore()

const count = ref(13)

const list = computed(() => verificationStore.list)
</script>

<template>
  <div class="verification">
    <div class="verification__header">
      <VerificationHeader title="Анкет на верификации" :count="count" />
    </div>
    <div class="verification__content">
      <Scrollbar>
        <VerificationList :list="list" class="verification__list" />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.verification {
  &__content {
    margin-top: 20px;
  }

  &__list {
    padding-right: 30px;
  }
}
</style>
