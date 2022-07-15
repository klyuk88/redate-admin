<template>
  <div class="mailings-layout">
    <div class="mailings-layout__content">
      <div class="default-layout__view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-layout {
  width: 100%;
  height: 100%;

  &__content {
    position: relative;
    width: 87%;
    min-height: calc(100% - 17px);
    margin-top: 17px;
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // border-top: 1px solid $default-layout-border;
      // border-left: 1px solid $default-layout-border;
      // border-right: 1px solid $default-layout-border;
      background: $mailing-layout-background;
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
