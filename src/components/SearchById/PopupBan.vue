<script setup>
const emit = defineEmits(['closeBanModal'])
</script>

<template>
  <div class="background__ban" @click.self="emit('closeBanModal')">
    <div class="container__ban">
      <div class="content__ban">
        <img src="@/assets/search__logos/ban__logo__popup.svg" alt="" />
        <p>Блокировка пользотваеля ID555222</p>
        <textarea
          class="desc__ban"
          placeholder="Опишите причину блокирови...
"
        ></textarea>
        <div class="btn">Заблокировать</div>
      </div>
      <div class="logo__close">
        <img
          src="@/assets/search__logos/close.svg"
          alt=""
          @click="emit('closeBanModal')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__ban {
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
  .container__ban {
    display: flex;
    .content__ban {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      background: #242529;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
      border-radius: 24px;
      margin-right: 16px;

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 153.5%;
        margin: 16px 0 0 0;
      }
      .desc__ban {
        padding: 16px;
        margin: 16px 0 16px 0;
        width: 328px;
        height: 215px;
        outline: none;
        resize: none;
        border: 1px solid #ffffff;
        border-radius: 11px;
        background: none;
        color: #ffffff;
        &::placeholder {
          font-weight: 600;
          font-size: 15px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.33);
        }
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
