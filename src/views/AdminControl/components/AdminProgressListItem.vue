<script setup>
defineProps({
  progressData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="progress__block">
    <div class="date">{{ progressData.date }}</div>
    <div class="statisctic">
      <div class="progress__item">
        <img src="@/assets/admin/verification.svg" alt="" />
        <p>Верификация</p>
        <span>{{ progressData.verification }}</span>
      </div>
      <div class="vertical__line"></div>
      <div class="progress__item">
        <img src="@/assets/admin/moderation.svg" alt="" />
        <p>Модерация</p>
        <span>{{ progressData.moderation }}</span>
      </div>
      <div class="vertical__line"></div>
      <div class="progress__item">
        <img src="@/assets/admin/reports.svg" alt="" />
        <p>Жалобы</p>
        <span>{{ progressData.reports }}</span>
      </div>
      <div class="vertical__line"></div>
      <div class="progress__item">
        <img src="@/assets/admin/ban.svg" alt="" />
        <p>Блокировки</p>
        <span>{{ progressData.ban }}</span>
      </div>
      <div class="vertical__line"></div>
      <div class="progress__item">
        <img src="@/assets/admin/maillist.svg" alt="" />
        <p>Рассылки</p>
        <span>{{ progressData.maillist }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vertical__line {
  height: 37px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}
.progress__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  .date {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #2b66fc;
    margin-left: 43px;
  }
  .statisctic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 828px;
    margin-right: 24px;
  }
  .progress__item {
    display: flex;
    align-items: center;
    p {
      margin: 0 7px 0 14px;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 153.5%;
      display: flex;
      align-items: center;
      color: #2d66fa;
    }
  }
}
</style>
