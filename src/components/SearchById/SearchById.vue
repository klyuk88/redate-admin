<script setup>
import UserCard from './UserCard.vue'
</script>

<template>
  <div class="background__search">
    <div class="navbar__search">
      <h1>Поиск пользователя по ID</h1>
      <div class="input__box">
        <input type="text" />
        <img src="@/assets/search__logos/search.svg" alt="" />
      </div>
    </div>
  </div>
  <UserCard />
</template>

<style lang="scss" scoped>
.background__search {
    width: 1226px;
    position: relative;
    z-index: 99;
  .navbar__search {
    display: flex;
    justify-content: space-between;
    height: 147px;
    background: #27282c;
    border: 1px solid rgba(255, 255, 255, 0.33);
    h1 {
      margin: 49px 0 0 52px;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 34px;
      line-height: 43px;
      color: #ffffff;
    }
    .input__box {
      display: flex;
      margin: 49px 32px 0 0;
      input {
        width: 341px;
        height: 59px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 11px;
        border: none;
        outline: none;
        color: #ffffff;
        padding: 0px 16px;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 153.5%;
          border: 1px solid rgba(255, 255, 255, 0.33);
        &:focus {
            border: 1px solid #ffffff;
        }
      }
      img {
          cursor: pointer;
          position: absolute;
          right: 50px;
          top: 68px;
      }
    }
  }
}</style>
