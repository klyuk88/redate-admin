<!-- <script setup>

</script> -->

<template>
  <div id="v-model-select" class="selector__wrapper">
    <select class="selector" >
      <option>Супер-юзер</option>
      <option>Администратор</option>
      <option>Модератор</option>
      <option>Джун.модератор</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select {
  outline: 0;
  border: 0;
  box-shadow: none;
}
.selector__wrapper {
    width: 200px;
    display: flex;
}
.selector {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2b66fc;
  background: none;
}

</style>
