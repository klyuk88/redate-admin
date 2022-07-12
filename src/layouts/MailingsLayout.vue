<template>
  <div class="mailings-layout">
    <div class="mailings-layout__content">
      <router-view />
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
    padding: 50px;
    margin-top: 17px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-top: 1px solid $default-layout-border;
      border-left: 1px solid $default-layout-border;
      border-right: 1px solid $default-layout-border;
      border-radius: 16px 16px 0 0;
      background: $default-layout-background;
      opacity: 0.2;
    }
  }
}
</style>
