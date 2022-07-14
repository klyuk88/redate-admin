<script setup>
defineProps({
  sex: {
    type: String,
    default: 'Мужчины',
  },
  overall: {
    type: Number,
    default: null,
  },
  tarifsOverall: {
    type: Number,
    default: null,
  },
  maillistOverall: {
    type: Number,
    default: null,
  },
  sendsOverall: {
    type: Number,
    default: null,
  },
  famelePage: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="sex__stats">
    <div class="stats__header">
      <div class="stats__logo">
        <img v-if="!famelePage" src="@/assets/metrics_icons/male.svg" alt="" />
        <img v-if="famelePage" src="@/assets/metrics_icons/female.svg" alt="" />
        <h3>{{ sex }}</h3>
      </div>
      <p>{{ overall }}<span>₽</span></p>
    </div>
    <div class="stats__body">
      <div class="tarrifs">
        <div class="stats__item">
          <div class="stats__left__side">
            <div>
              <img src="@/assets/metrics_icons/crown.svg" alt="" />
            </div>
            <p>Тарифы</p>
          </div>
          <p class="cash">{{ tarifsOverall }}<span>₽</span></p>
        </div>
        <div class="details">
          <div class="details__line">
            <div class="dot"></div>
            <p>30 дней</p>
            <span>(625)</span>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
        <div class="details">
          <div class="details__line">
            <div class="dot"></div>
            <p>14 дней</p>
            <span>(44)</span>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
        <div class="details">
          <div class="details__line">
            <div class="dot"></div>
            <p>7 дней</p>
            <span>(380)</span>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
      </div>

      <div class="stats__item">
        <div class="stats__left__side">
          <div>
            <img src="@/assets/metrics_icons/maillist.svg" alt="" />
          </div>
          <p>Рассылки<span>(225)</span></p>
        </div>
        <p class="cash">{{ maillistOverall }}<span>₽</span></p>
      </div>
      <div class="tarrifs"  v-if="famelePage">
        <div class="stats__item">
          <div class="stats__left__side">
            <div>
              <img src="@/assets/metrics_icons/other.svg" alt="" />
            </div>
            <p>Начало диалога</p>
          </div>
          <p class="cash">{{ sendsOverall }}<span>₽</span></p>
        </div>
        <div class="details">
          <div class="details__line">
            <div class="dot"></div>
            <p>Обычный</p>
            <span>(625)</span>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
        <div class="details">
          <div class="details__line">
            <div class="dot"></div>
            <p>Даймонд</p>
            <span>(44)</span>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin: 0;
}
p {
  margin: 0;
}
.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 200;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.6;
    span {
      margin-left: 4px;
    }
  }
  .details__line {
    display: flex;
    align-items: center;
    p {
      font-weight: 300;
      font-size: 15px;
      line-height: 153.5%;
      color: rgba(255, 255, 255, 0.33);
      margin: 0 4px 0 4px;
    }
    span {
      font-weight: 600;
      font-size: 15px;
      line-height: 153.5%;
      color: rgba(255, 255, 255, 0.33);
    }
    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.33);
      margin-left: 32px;
    }
  }
}
.sex__stats {
  width: 297.5px;
  height: 296px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px -4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  margin-bottom: 24px;

  .stats__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 16px;
    width: 297.5px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 11px;
    .stats__logo {
      display: flex;
      align-items: center;
      h3 {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
      }
    }
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 153.5%;
      color: #ffffff;
    }
  }
  .stats__body {
    padding: 8px 16px 16px 16px;
    li {
      margin-left: 32px;
      color: rgba(255, 255, 255, 0.33);
      font-weight: 300;
      font-size: 15px;
    }
    .stats__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .stats__left__side {
        display: flex;
        align-items: center;
        p {
          margin-left: 8px;
          color: rgba(255, 255, 255, 0.33);
          span {
            margin-left: 4px;
          }
        }
      }
    }
  }
}
</style>
