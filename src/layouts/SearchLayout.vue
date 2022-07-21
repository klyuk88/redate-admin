<template>
  <div class="search-layout">
    <div class="search-layout__content">
      <div class="default-layout__view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-layout {
  width: 100%;
  height: 100%;

  &__content {
    position: relative;
    width: 89.4%;
    min-height: 100%;
    // overflow-y: scroll;
    z-index: 1;

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
      z-index: 2;
    }
  }

  &__view {
    position: relative;
    z-index: 3;
  }
}
</style>
