<script setup>
import RoleSelector from './RoleSelector.vue'
const emit = defineEmits(['closeNewModal'])
</script>

<template>
  <div class="background__new" @click.self="emit('closeNewModal')">
    <div class="content">
      <div class="container__new">
        <p>Создание нового админа</p>
        <input class="input" type="text" placeholder="Логин" />
        <input class="input" type="text" placeholder="Пароль" />
        <div class="choose__role">
          <p>Роль:</p>
          <RoleSelector class="selector" />
        </div>
        <div class="btn">Создать</div>
      </div>
      <div class="close">
        <img
          src="@/assets/search__logos/close.svg"
          alt=""
          @click="emit('closeNewModal')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 328px;
  height: 60px;
  background: none;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 11px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 18px 0 19px 12px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
}
.background__new {
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
  }
  .container__new {
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
      margin-bottom: 16px;
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
    .choose__role {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 328px;
      margin: -4px 0 16px 0;
      p {
        font-weight: 600;
        font-size: 15px;
        line-height: 153.5%;
        color: rgba(255, 255, 255, 0.33);
      }
      .selector {
        width: unset;
      }
    }
  }
  .close {
    margin-left: 16px;
    cursor: pointer;
  }
}
</style>
