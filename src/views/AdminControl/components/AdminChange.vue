<script setup>
const emit = defineEmits(['closeChangeModal'])

defineProps({
  adminName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="background__change" @click.self="emit('closeChangeModal')">
    <div class="content">
      <div class="container__change">
        <p>Ведитеновый логин и пароль для юзера</p>
        <div class="name">
          <div class="dot"></div>
          <h1>{{ adminName }}</h1>
        </div>
        <input class="input" type="text" placeholder="Логин" />
        <input class="input" type="text" placeholder="Пароль" />
        <div class="btn">Изменить логин и пароль</div>
      </div>
      <div class="close">
        <img
          src="@/assets/search__logos/close.svg"
          alt=""
          @click="emit('closeChangeModal')"
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
.background__change {
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
  .container__change {
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
    }
    .name {
      margin: 8px 0 16px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      h1 {
        font-weight: 600;
        font-size: 34px;
        line-height: 43px;
        color: #ffffff;
        margin: 0;
      }
      .dot {
        width: 5px;
        height: 5px;
        background-color: #2e66f5;
        border-radius: 50%;
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
