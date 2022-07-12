<script setup>
import Sidebar from './components/Sidebar'
</script>

<template>
  <div class="app">
    <div class="app__sidebar">
      <Sidebar />
    </div>
    <div class="app__content"></div>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  &__sidebar {
    width: 310px;
    height: 100%;
  }

  &__content {
    width: calc(100% - 310px);
    height: 100%;
  }
}
</style>
