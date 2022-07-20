<script setup>
import { ref } from 'vue'

defineProps({
  chatdata: {
    type: Object,
    required: true,
  },
})

const isClicked = ref(false)
</script>

<template>
  <div
    class="message__item"
    :class="{ checked: isClicked }"
    @click="isClicked = true"
  >
    <div class="left__block">
      <div class="avatar">
        <img src="@/assets/chat/avatar.png" alt="" />
      </div>
      <div class="title">
        <h1>{{ chatdata.userName }}</h1>
        <p>
          {{ chatdata.message }}
        </p>
      </div>
    </div>
    <div class="date__controll">
      <p>{{ chatdata.date }}</p>
      <img v-if="isClicked" src="@/assets/chat/delete.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message__item {
  position: relative;
  z-index: 1;
  padding: 12px 15px;
  width: 781px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
  &.checked {
    background: rgba(255, 255, 255, 0.05);
  }
  .left__block {
    display: flex;
    align-items: flex-start;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 24px;
      margin-right: 12px;
      img {
        width: 100%;
      }
    }
    .title {
      width: 534px;
      h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 153.5%;
        color: #ffffff;
        margin: 0;
      }
      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 153.5%;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
      }
    }
  }

  .date__controll {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
      color: rgba(255, 255, 255, 0.33);
      margin: 0;
    }
    img {
      position: relative;
      z-index: 2;
      cursor: pointer;
    }
  }
}
</style>
