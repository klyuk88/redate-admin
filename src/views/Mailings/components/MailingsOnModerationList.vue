<script setup>
import MailingsOnModerationListItem from './MailingsOnModerationListItem.vue'

defineProps({
  mailings: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="mailings-on-moderation-list">
    <MailingsOnModerationListItem
      v-for="(mailing, idx) in mailings"
      :key="idx"
      class="mailings-on-moderation-list__item"
      :mailing="mailing"
    />
  </div>
</template>

<style lang="scss">
.mailings-on-moderation-list {
  height: calc(100vh - 135px);
  padding-right: 24px;

  &__item {
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
