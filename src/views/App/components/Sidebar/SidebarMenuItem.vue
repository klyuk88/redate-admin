<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link :to="item.url" class="sidebar-menu-item">
    <div class="sidebar-menu-item__left">
      <img v-if="item.icon" class="sidebar-menu-item__icon" :src="item.icon" />
      <div class="sidebar-menu-item__title">{{ item.title }}</div>
    </div>
    <div v-if="item.count !== 0" class="sidebar-menu-item__count">
      {{ item.count }}
    </div>
  </router-link>
</template>

<style lang="scss">
.sidebar-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 24px;
  margin-top: 12px;
  border-radius: 15px;
  text-decoration: none;

  &.router-link-active {
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
