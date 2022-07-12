<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '../../store/Sidebar.js'
import SidebarHeader from './SidebarHeader.vue'
import SidebarMenu from './SidebarMenu.vue'

const sidebarStore = useSidebarStore()

const username = computed(() => sidebarStore.username)

const menu = computed(() => sidebarStore.menu)
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <SidebarHeader :username="username" />
    </div>
    <div class="sidebar__menu">
      <SidebarMenu :menu="menu" />
    </div>
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 100%;
  height: 100%;
  padding: 53px 14px;
}
</style>
