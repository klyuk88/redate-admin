<script setup>
import { computed } from 'vue'
import router from '@/router'
import Sidebar from './components/Sidebar'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MailingsLayout from '@/layouts/MailingsLayout.vue'
import VerificationLayout from '@/layouts/VerificationLayout.vue'
import SearchLayout from '@/layouts/SearchLayout.vue'

const component = computed(() => {
  switch (router.currentRoute.value.meta.layout) {
    case 'mailings':
      return MailingsLayout
    case 'verification':
      return VerificationLayout
    case 'search':
      return SearchLayout
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <div class="app">
    <div class="app__sidebar">
      <Sidebar />
    </div>
    <div class="app__content">
      <component :is="component" />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  &__sidebar {
    width: 310px;
    height: 100%;
  }

  &__content {
    width: calc(100% - 310px);
    height: 100%;
  }
}
</style>
