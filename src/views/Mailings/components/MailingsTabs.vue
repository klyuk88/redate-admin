<script setup>
import { computed } from 'vue'
import MailingsTabsItem from './MailingsTabsItem.vue'
import MailingsOnModeration from '../views/MailingsOnModeration.vue'
import MailingsActive from '../views/MailingsActive.vue'
import MailingsRejected from '../views/MailingsRejected.vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  currentTab: {
    type: Object,
    required: true,
  },
})

const component = computed(() => {
  switch (props.currentTab.componentName) {
    case 'MailingsOnModeration':
      return MailingsOnModeration
    case 'MailingsActive':
      return MailingsActive
    case 'MailingsRejected':
      return MailingsRejected
    default:
      return null
  }
})
</script>

<template>
  <div class="mailings-tabs">
    <div class="mailings-tabs__list">
      <div
        v-for="(tab, idx) in tabs"
        :key="idx"
        class="mailings-tabs__item"
        :class="[
          {
            [`mailings-tabs__item--${tab.mod}`]: tab.mod,
            active: tab.id === currentTab.id,
          },
        ]"
      >
        <MailingsTabsItem :tab="tab" :active="tab.id === currentTab.id" />
      </div>
    </div>
    <div class="mailings-tabs__component">
      <component :is="component"></component>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-tabs {
  &__list {
    display: flex;
    align-items: flex-end;
    background: $background;
  }

  &__item--on-moderation.active {
    width: 57.4%;
  }

  &__item--on-moderation.active ~ .mailings-tabs__item--active,
  .mailings-tabs__item--rejected {
    width: 21.3%;
  }

  &__item--active.active {
    width: 40.6%;
  }

  &__item--active.active ~ .mailings-tabs__item--on-moderation {
    width: 38%;
  }

  &__item--active.active ~ .mailings-tabs__item--rejected {
    width: 21.4%;
  }

  &__item--rejected.active {
    width: 42.3%;
  }

  &__item--rejected.active ~ .mailings-tabs__item--on-moderation {
    width: 36.2%;
  }

  &__item--rejected.active ~ .mailings-tabs__item--active {
    width: 21.5%;
  }

  &__component {
    height: calc(100vh - 99px);
  }
}
</style>
