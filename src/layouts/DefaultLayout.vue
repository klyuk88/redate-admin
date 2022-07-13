<template>
  <div class="default-layout">
    <div class="default-layout__content">
      <div class="default-layout__view">
        <router-view />
      </div>
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

  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y,
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background: rgba($white, 0.2);
  }

  .ps__rail-y {
    opacity: 1;
    width: 2px;
  }

  .ps__thumb-y,
  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    right: 0;
    width: 2px;
    border-radius: 0;
    background: $white;
  }

  .ps:hover > .ps__rail-x,
  .ps:hover > .ps__rail-y,
  .ps--focus > .ps__rail-x,
  .ps--focus > .ps__rail-y,
  .ps--scrolling-x > .ps__rail-x,
  .ps--scrolling-y > .ps__rail-y {
    opacity: 1;
  }
}
</style>
