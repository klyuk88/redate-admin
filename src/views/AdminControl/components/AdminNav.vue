<script setup>
import Calendar from '../../../components/Calendar/Calendar.vue'
</script>

<template>
  <div class="admin__nav">
    <p>Имя админа</p>
    <p>Роль</p>
    <Calendar />
  </div>

  <div>
    <div class="leftside"></div>
    <div class="leftside"></div>
  </div>
</template>

<style lang="scss" scoped>
.admin__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.33);
  }
}
</style>
