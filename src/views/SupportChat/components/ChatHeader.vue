<script setup>
defineProps({
  count: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="chat__header">
    <div class="header__title">
      <h1>{{ title }}</h1>
      <div class="counter__message">{{ count }}</div>
    </div>
    <div class="horizontal__line"></div>
  </div>
</template>

<style lang="scss" scoped>
.chat__header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header__title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
      color: #ffffff;
      margin: 0 4px 16px 0;
    }
    .counter__message {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
      color: #ffffff;
    }
  }
  .horizontal__line {
    margin-bottom: 49px;
    width: 816px;
    height: 2px;
    background: #ffffff;
  }
}
</style>
