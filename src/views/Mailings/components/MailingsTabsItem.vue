<script setup>
import { useMailingsStore } from '../store/Mailings.js'

const mailingStore = useMailingsStore()

const props = defineProps({
  tab: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const clickHandler = () => {
  mailingStore.setCurrentTab(props.tab)
}
</script>

<template>
  <div
    class="mailings-tabs-item"
    :class="{
      active,
      'mailings-tabs-item--without-counter': !tab.count,
      [`mailings-tabs-item--${tab.mod}`]: true,
    }"
    @click="clickHandler()"
  >
    <div class="mailings-tabs-item__title">{{ tab.title }}</div>
    <div v-if="tab.count" class="mailings-tabs-item__counter">
      {{ tab.count }} шт.
    </div>
  </div>
</template>

<style lang="scss">
.mailings-tabs-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border: 1px solid rgba($white, 0.066);
  border-radius: 16px 16px 0 0;
  cursor: pointer;

  &--without-counter {
    justify-content: center;
  }

  &__title {
    height: 37px;
    color: rgba($white, 0.5);
    font-size: 2.4rem;
    line-height: 3.7rem;
    font-weight: 400;
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 37px;
    border: 1px solid $gray;
    border-radius: 8px;
    color: $gray;
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 700;
  }

  &.active {
    border-bottom: none;
    background: $mailing-tab-background;

    .mailings-tabs-item {
      &__title {
        color: $white;
        font-weight: 600;
      }

      &__counter {
        border-color: $white;
        color: $white;
      }
    }
  }

  &--on-moderation {
    padding: 0 25px 0 50px;
  }

  &--active {
    padding: 0 36px;
  }

  &--rejected {
    padding: 0 36px;
  }
}
</style>
