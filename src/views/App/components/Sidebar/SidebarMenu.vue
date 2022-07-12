<script setup>
import { computed } from 'vue'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
})

const filteredMenu = computed(() => props.menu.filter((item) => item.show))
</script>

<template>
  <div class="sidebar-menu">
    <SidebarMenuItem
      v-for="(item, idx) in filteredMenu"
      :key="idx"
      :item="item"
      class="sidebar-menu__item"
    />
  </div>
</template>

<style lang="scss">
.sidebar-menu {
  width: 100%;

  &__item {
    margin-top: 12px;
  }
}
</style>
