<script setup>
const emit = defineEmits(['closeUnbanModal'])
</script>

<template>
  <div class="background__unban" @click.self="emit('closeUnbanModal')">
    <div class="container__unban">
      <div class="content__unban">
        <img src="@/assets/search__logos/ban__logo__popup.svg" alt="" />
        <p>Вы уверены что хотите разблокировать пользотваеля ID555222?</p>
        <div class="btn">Разблокировать</div>
      </div>
      <div class="logo__close">
        <img
          @click="emit('closeUnbanModal')"
          src="@/assets/search__logos/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__unban {
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  width: 1680px;
  background: rgba(11, 12, 18, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .logo__close {
    cursor: pointer;
  }
  .container__unban {
    display: flex;
    .content__unban {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      background: #242529;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
      border-radius: 24px;
      margin-right: 16px;
        text-align: center;
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 153.5%;
        margin: 8px 0 16px 0;
        width: 314px;
      }
      .btn {
        width: 328px;
        height: 54px;
        background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
</style>
