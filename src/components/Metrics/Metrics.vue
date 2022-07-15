<script setup>
import StatsBlock from './StatsBlock.vue'
import UsersBlock from './UsersBlock.vue'
</script>

<template>
  <div class="background__metrics">
    <div class="header__metrics">
      <h1>Мониторинг дохода</h1>
      <div class="calendar"></div>
    </div>
    <div class="income__metrics">
      <div class="income__header">
        <h3>Доход за выбранный срок</h3>
        <p>333 332<span>₽</span></p>
      </div>
      <div class="income__body">
        <div class="income__item">
          <div class="income__left__side">
            <div>
              <img src="@/assets/metrics_icons/crown.svg" alt="" />
            </div>
            <p>Тарифы</p>
          </div>
          <p>143 222<span>₽</span></p>
        </div>
        <div class="income__item">
          <div class="income__left__side">
            <div>
              <img src="@/assets/metrics_icons/maillist.svg" alt="" />
            </div>
            <p>Рассылки <span>(825)</span></p>
          </div>
          <p>80 110<span>₽</span></p>
        </div>
        <div class="income__item">
          <div class="income__left__side">
            <div>
              <img src="@/assets/metrics_icons/other.svg" alt="" />
            </div>
            <p>Другое</p>
          </div>
          <p>49 310<span>₽</span></p>
        </div>
      </div>
    </div>
    <div class="stats__block">
      <StatsBlock famele-page="true" />
      <StatsBlock sex="Девушки" />
    </div>
    <div class="new__users">
      <UsersBlock
        title="Новых польвателей"
        count-overall="663"
        male-count="363"
        female-count="300"
      />
    </div>
    <div class="horizontal__line"></div>
    <div class="online__block">
      <UsersBlock
        class="usersBlock"
        title="Сейчас онлайн"
        count-overall="43632"
        male-count="12323"
        female-count="33538"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.usersBlock {
  color: #2965ff;
}
.cash {
  font-weight: 300;
  font-size: 18px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: #ffffff;
}
p {
  margin: 0;
  color: rgba(255, 255, 255, 0.33);
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
}
.background__metrics {
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  .header__metrics {
    display: flex;
    h1 {
      font-weight: 600;
      font-size: 34px;
      line-height: 43px;
      margin: 0 0 17px 0;
    }
    .calendar {
    }
  }
  .income__metrics {
    width: 611px;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0px -4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 11px;
    margin-bottom: 24px;
    .income__header {
      padding: 18px 16px;
      gap: 8px;
      width: 611px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        margin: 0;
      }
      p {
        font-weight: 700;
        font-size: 24px;
        line-height: 153.5%;
        margin: 0;
        color: #ffffff;
      }
    }
    .income__body {
      padding: 8px 16px 12px 16px;
      .income__item {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: 300;
          font-size: 18px;
          line-height: 153.5%;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        .income__left__side {
          display: flex;
          align-items: center;
          p {
            color: rgba(255, 255, 255, 0.33);
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            margin-left: 8px;
            span {
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
  .stats__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 611px;
  }
  .horizontal__line {
    width: 680px;
    height: 0px;
    border: 1px solid #6c6d70;
    margin-bottom: 24px;
  }
}
</style>
