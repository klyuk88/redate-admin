<!-- <script setup></script> -->

<template>
  <div class="admin__item">
    <div class="title">
      <h1>katya</h1>
      <div class="dot"></div>
    </div>
    <div class="role">
      <div class="selector"></div>
    </div>
    <div class="btn__block">
      <div class="btn">
        <img src="@/assets/admin/key.svg" alt="" />
      </div>
      <div class="btn">x</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 65px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  .title {
    display: flex;
    h1 {
      font-weight: 600;
      font-size: 15px;
      line-height: 153.5%;
      color: #ffffff;
      margin: 0;
    }
    .dot {
      width: 5px;
      height: 5px;
      background: #2b66fc;
      border-radius: 50%;
    }
  }
  .role {
  }
  .btn__block {
    display: flex;
    align-items: center;
    gap: 10px;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 13px;
      width: 33px;
      height: 33px;
      border: 1px solid #3e74ff;
      border-radius: 11px;
      color: #3e74ff;
      cursor: pointer;
    }
  }
}
</style>
