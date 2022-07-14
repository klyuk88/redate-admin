<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  countOverall: {
    type: Number,
    default: null,
  },
  maleCount: {
    type: Number,
    default: null,
  },
  femaleCount: {
    type: Number,
    default: null,
  },
})
</script>

<template>
  <div class="stats__back">
    <div class="stats__header">
      <h1>{{ title }}</h1>
      <p>{{ countOverall }}</p>
    </div>
    <div class="stats__body">
      <div class="stats">
        <div class="leftside">
          <div class="logo">
            <img src="@/assets/metrics_icons/male__mini.svg" alt="" />
          </div>
          <p>Мужчин</p>
        </div>
        <div class="rightside">
          {{ maleCount }}
        </div>
      </div>
      <div class="vertical__line"></div>
      <div class="stats">
        <div class="leftside">
          <div class="logo">
            <img src="@/assets/metrics_icons/female__mini.svg" alt="" />
          </div>
          <p>Девушек</p>
        </div>
        <div class="rightside">
          {{ femaleCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
}
p {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 153.5%;
}
.stats__back {
  width: 611px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px -4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 11px;
  margin-bottom: 24px;
  .stats__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 16px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 11px;
  }
  .stats__body {
    display: flex;
    padding: 16px 26px 27px 26px;
    justify-content: space-between;
    align-items: center;
    .vertical__line {
      width: 0px;
      height: 26px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .stats {
      display: flex;
      width: 255px;
      justify-content: space-between;
      align-items: center;
      .leftside {
        display: flex;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 15px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.33);
          margin-left: 4px;
        }
      }
      .rightside {
        font-weight: 200;
        font-size: 15px;
        line-height: 153.5%;
        color: #ffffff;
        opacity: 0.6;
      }
    }
  }
}
</style>
