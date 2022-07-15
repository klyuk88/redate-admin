<script setup>
const emit = defineEmits(['closeDiamondModal'])
</script>

<template>
  <div class="background__diamond" @click.self="emit('closeDiamondModal')">
    <div class="container__diamond">
      <div class="content__diamond">
        <img
          src="@/assets/search__logos/diamond.svg"
          alt=""
          class="logo__diamond"
        />
        <p>Присвоить пользователю ID454543 статус Diamond?</p>
        <div class="btn__block">
          <div class="btn" @click="emit('closeDiamondModal')">Отмена</div>
          <div class="btn gold">Присвоить</div>
        </div>
      </div>
      <div class="close__logo">
        <img
          src="@/assets/search__logos/close.svg"
          alt=""
          @click="emit('closeDiamondModal')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__diamond {
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
  .container__diamond {
    .close__logo {
      margin-left: 16px;
      cursor: pointer;
    }
    display: flex;
    .content__diamond {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: rgba(36, 37, 41, 0.6);
      border-radius: 24px;
      width: 376px;
      height: 234px;
      .logo__diamond {
        margin-top: 24px;
      }
      p {
        margin: 10px 0 16px 0;
        width: 308px;
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        text-align: center;
        background: linear-gradient(
          132.27deg,
          #f9ae3f -0.77%,
          #ffdba5 36.67%,
          #ad6902 96.37%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .btn__block {
        display: flex;
        width: 328px;
        justify-content: space-between;
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 156px;
          height: 54px;
          border: 1px solid rgba(255, 255, 255, 0.33);
          border-radius: 11px;
          cursor: pointer;
          position: relative;
          z-index: 3;
          &.gold {
            border: none;
            background: linear-gradient(
              132.27deg,
              #f9ae3f -0.77%,
              #ffdba5 36.67%,
              #ad6902 96.37%
            );
            color: #000000;
          }
        }
      }
    }
    .content__diamond:before {
      background: linear-gradient(
        103.31deg,
        #f9ae3f 100%,
        #ffdba5 100%,
        #ad6902 100%
      );
    }
    .content__diamond:before {
      content: '';
      width: 376px;
      height: 234px;
      position: absolute;
      border-radius: 24px;
      padding: 1px;
      -webkit-mask: linear-gradient(#fff, #fff 0) content-box,
        linear-gradient(#fff, #fff 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
}
</style>
