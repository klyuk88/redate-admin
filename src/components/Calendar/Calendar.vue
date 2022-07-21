<!-- <script setup></script> -->

<template>
  <div class="calendar">
    <div class="date__count">18 jul</div>
    <div class="dropdown">период <img src="@/assets/admin/dropdown__arrow.svg" alt=""></div>
  </div>
</template>

<style lang="scss" scoped>
.calendar {
  padding: 18px 10px;
  gap: 8px;
  width: 230px;
  height: 46px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .date__count {
    padding: 0px 10px;
    gap: 10px;
    width: 106px;
    height: 23px;
    background: #242529;
    border-radius: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 153.5%;
    color: #2d66fa;
  }
  .dropdown {
    font-weight: 800;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
        margin-left: 8px;
    }
  }
}
</style>
