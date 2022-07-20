<script setup>
const emit = defineEmits(['closeAuthModal'])
</script>

<template>
  <div class="background__auth">
    <div class="content">
      <div class="container__auth">
        <p>Ведите пароль из смс</p>
        <input class="input" type="password" />
        <div class="btn">Выпоолнить действие</div>
      </div>
      <div class="close">
        <img
          src="@/assets/search__logos/close.svg"
          alt=""
          @click="emit('closeAuthModal')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 328px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 11px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.1em;
  color: #3e74ff;
  padding: 18px 0 19px 12px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
}
.background__auth {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(11, 12, 18, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    .container__auth {
      padding: 24px;
      width: 376px;
      background: #242529;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
      border-radius: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        margin: 0;
        margin-bottom: 9px;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 328px;
      height: 54px;
      background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
      border-radius: 11px;
      cursor: pointer;
    }
  }
    .close {
    margin-left: 16px;
    cursor: pointer;
  }
}
</style>
