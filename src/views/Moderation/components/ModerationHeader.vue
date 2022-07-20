<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="moderation-header">
    <div class="moderation-header__title">{{ title }}</div>
    <div class="moderation-header__counter">{{ count }} шт.</div>
  </div>
</template>

<style lang="scss">
.moderation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 22px 8px 0;

  &__title {
    color: $white;
    font-size: 3.4rem;
    line-height: 4.3rem;
    font-weight: 600;
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    height: 49px;
    border: 1px solid $accent-3;
    border-radius: 8px;
    color: $white;
    font-size: 2.4rem;
    line-height: 3.684rem;
    font-weight: 700;
  }
}
</style>
