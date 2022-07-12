<script setup>
import { computed } from 'vue'

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
    <router-link
      v-for="(item, idx) in filteredMenu"
      :key="idx"
      :to="item.url"
      class="sidebar-menu__item"
    >
      <div class="sidebar-menu__left">
        <img v-if="item.icon" class="sidebar-menu__icon" :src="item.icon" />
        <div class="sidebar-menu__title">{{ item.title }}</div>
      </div>
      <div v-if="item.count !== 0" class="sidebar-menu__count">
        {{ item.count }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.sidebar-menu {
  width: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 13px 24px;
    margin-top: 12px;
    border-radius: 15px;
    text-decoration: none;
  }

  &__item.router-link-active {
    background: $menu-active-item;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 26px;
    height: 26px;
    margin-right: 14px;
  }

  &__title,
  &__count {
    color: $white;
    font-size: 1.8rem;
    line-height: 2.763rem;
    font-weight: 600;
  }

  &__count {
    color: $accent-2;
  }
}
</style>
