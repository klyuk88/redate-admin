<script setup>
import MailingsRejectedListItem from './MailingsRejectedListItem.vue'

defineProps({
  mailings: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="mailings-rejected-list">
    <MailingsRejectedListItem
      v-for="(mailing, idx) in mailings"
      :key="idx"
      class="mailings-rejected-list__item"
      :mailing="mailing"
    />
  </div>
</template>

<style lang="scss">
.mailings-rejected-list {
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
