<script setup>
import { computed } from 'vue'
import { useMailingsStore } from '../store/Mailings'
import Scrollbar from '@/components/Scrollbar'
import MailingsOnModerationList from '../components/MailingsOnModerationList.vue'

const mailingsStore = useMailingsStore()

const mailings = computed(() => mailingsStore.onModerationMailings)
</script>

<template>
  <div class="mailings-on-moderation">
    <div class="mailings-on-moderation__content">
      <Scrollbar>
        <MailingsOnModerationList
          class="mailings-on-moderation__list"
          :mailings="mailings"
        />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-on-moderation {
  height: 100%;
  border-left: 1px solid rgba($white, 0.066);
  border-right: 1px solid rgba($white, 0.066);
  padding: 36px 48px 0 48px;
}
</style>
