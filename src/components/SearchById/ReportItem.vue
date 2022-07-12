<script setup>
defineProps({
  reason: {
    type: String,
    default: null,
  },
  id: {
    type: Number,
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
  <div class="report__item">
    <div class="report__header">
      <div class="reason">
        <p>Причина:</p>
        <span>{{ reason }}</span>
      </div>
      <div class="report__data">
        <p>Жалоба от:</p>
        <span>{{ id }}</span>
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="horizontal__line"></div>
    <p class="text">"{{ text }}"</p>
  </div>
</template>

<style lang="scss" scoped>

 

p {
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
}
span {
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
}
.report__item {
  width: 677px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 16px 24px;
  margin-bottom: 11px;
  .report__header {
    display: flex;
    justify-content: space-between;
    .reason {
      display: flex;
      align-items: center;
      span {
        color: #ffffff;
        margin-left: 10px;
      }
    }
    .report__data {
      display: flex;
      align-items: center;
      span {
        color: #2965ff;
        margin: 0 8px 0 8px;
      }
    }
  }
  .horizontal__line {
    width: 629px;
    height: 0px;
    border: 1px solid #1e1f23;
    margin: 8px 0 8px 0;
  }
}
</style>
