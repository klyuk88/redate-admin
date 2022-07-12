<template>
  <div class="verification-layout">
    <div class="verification-layout__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.verification-layout {
  width: 100%;
  height: 100%;

  &__content {
    position: relative;
    width: 92.7%;
    min-height: 100%;
    padding: 50px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-left: 1px solid $default-layout-border;
      border-right: 1px solid $default-layout-border;
      background: $default-layout-background;
      opacity: 0.2;
    }
  }
}
</style>
