<script setup>
import { ref, computed } from 'vue'
import { useModerationStore } from './store/Moderation.js'
import Scrollbar from '@/components/Scrollbar'
import ModerationHeader from './components/ModerationHeader.vue'
import ModerationList from './components/ModerationList.vue'

const moderationStore = useModerationStore()

const count = ref(61)

const list = computed(() => moderationStore.list)
</script>

<template>
  <div class="moderation">
    <div class="moderation__header">
      <ModerationHeader title="Анкеты на модерации" :count="count" />
    </div>
    <div class="moderation__content">
      <Scrollbar>
        <ModerationList :list="list" class="moderation__list" />
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.moderation {
  &__content {
    margin-top: 20px;
  }

  &__list {
    padding-right: 30px;
  }
}
</style>
