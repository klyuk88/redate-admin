<script setup>
defineProps({
  name: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="note__item">
    <div class="note__header">
      <div class="name">
        <p>{{ name }}</p>
        <div class="online__status"></div>
      </div>
      <p>{{ date }}</p>
    </div>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  margin: 0;
}
.note__item {
  padding: 18px 16px;
  width: 376px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  margin-bottom: 32px;
  .note__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    .name {
      display: flex;
      .online__status {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #2b66fc;
        &.offline {
            background: #ffffff;
        }
      }
    }
  }
  .text {
    color: #ffffff;
  }
}
</style>
