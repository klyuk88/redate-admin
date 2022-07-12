<template>
  <div class="default-layout">
    <div class="default-layout__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  width: 100%;
  height: 100%;

  &__content {
    position: relative;
    width: 72.8%;
    min-height: 100%;
    padding: 50px;
    overflow-y: scroll;

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
