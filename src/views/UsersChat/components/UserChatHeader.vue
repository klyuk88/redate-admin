<!-- <script setup></script> -->

<template>
  <div class="user__chat__header">
    <div class="title__block">
      <div class="avatar">
        <img src="@/assets/chat/avatar.png" alt="" />
      </div>
      <h1>Анастасия</h1>
      <div class="vertical__line"></div>
      <h1>Алексадр</h1>
      <div class="avatar">
        <img src="@/assets/chat/avatar.png" alt="" />
      </div>
    </div>
    <div class="horizontal__line"></div>
  </div>
</template>

<style lang="scss" scoped>
.user__chat__header {
  width: 847px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title__block {
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 24px;
      margin: 0 24px;
      img {
        width: 100%;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
      color: #ffffff;
    }
  }
  .vertical__line {
      height: 16px;
      width: 2px;
      background: #ffffff;
      margin: 0 12px;
  }
  .horizontal__line {
    width: 847px;
    height: 0px;
    border: 1px solid rgba(255, 255, 255, 0.33);
    margin: 9px 0 12px 0;
  }
}
</style>
