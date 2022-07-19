<script setup>
defineProps({
  chatinfo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="chat__item">
    <div class="chat__container">
      <router-link to="/chat/vasya" class="link">
        <div class="avatar">
          <img src="@/assets/chat/avatar.png" alt="" />
          <div class="dot"></div>
        </div>
        <div class="message__block">
          <h1>{{ chatinfo.name }}</h1>
          <div class="message__info">
            <div class="response__avatar">
              <img src="@/assets/chat/response__avatar.png" alt="" />
            </div>
            <p>{{ chatinfo.message }}</p>
          </div>
        </div>
      </router-link>
      <div class="chat__info">
        <div class="date">{{ chatinfo.date }}</div>
        <div class="message__counter">
          <img src="@/assets/chat/delete.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    display: flex;
}
.chat__item {
  display: flex;
  align-items: center;
  width: 778px;
  margin-bottom: 2px;
  .chat__container {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    width: 742px;
    height: 79px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    &.old {
      background: none;
    }
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 20px;
      margin-right: 12px;
      img {
        width: 100%;
      }
      .dot {
        position: relative;
        left: 33px;
        bottom: 12px;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        background: linear-gradient(
          132.27deg,
          #f9ae3f -0.77%,
          #ffdba5 36.67%,
          #ad6902 96.37%
        );
      }
    }
    .message__block {
      height: 49px;
      width: 610px;
      h1 {
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        line-height: 153.5%;
        margin: 0;
        color: #ffffff;
      }
      .message__info {
        display: flex;
        align-items: center;
        p {
          margin: 0;
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.6);
        }
        .response__avatar {
          width: 22px;
          height: 22px;
          border-radius: 20px;
          margin-right: 8px;
          img {
            width: 100%;
          }
        }
      }
    }
    .chat__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .date {
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        color: rgba(255, 255, 255, 0.33);
        width: 48px;
      }
      .message__counter {
        margin-top: 6px;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 40px;
        font-weight: 600;
        font-size: 12px;
        line-height: 132.5%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  .delete__btn {
    padding: 7px 13px;
    gap: 10px;
    border: 1px solid #434447;
    border-radius: 2px;
    width: 39px;
    height: 79px;
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.horizontal__line {
  width: 715px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  margin-left: 14px;
}
</style>
