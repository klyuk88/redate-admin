<script setup>
defineProps({
  username: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="sidebar-header">
    <div class="sidebar-header__username">{{ username }}</div>
    <div class="sidebar-header__logout"></div>
  </div>
</template>

<style lang="scss">
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 24px;

  &__username {
    color: $accent;
    font-size: 3.4rem;
    line-height: 4.3rem;
    font-weight: 600;
  }

  &__logout {
    width: 24px;
    height: 24px;
    background: url('@/assets/icons/logout.svg');
    cursor: pointer;
  }
}
</style>
