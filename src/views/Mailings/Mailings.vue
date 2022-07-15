<script setup>
import { computed, onMounted } from 'vue'
import { useMailingsStore } from './store/Mailings.js'
import MailingsTabs from './components/MailingsTabs.vue'

const mailingsStore = useMailingsStore()

const tabs = computed(() => mailingsStore.tabs)

const currentTab = computed(() => mailingsStore.currentTab)

onMounted(() => {
  mailingsStore.setCurrentTab(tabs.value[0])
})
</script>

<template>
  <div class="mailings">
    <div class="mailings__tabs">
      <MailingsTabs :tabs="tabs" :current-tab="currentTab" />
    </div>
  </div>
</template>
