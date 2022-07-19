<script setup>
import { ref } from 'vue'

defineProps({
  blocked: {
    type: Object,
    required: true,
  },
})

const femalePage = ref(false)
</script>

<template>
  <div class="blockitem">
    <div class="item">
      <div class="item__header">
        <div class="title__status">
          <p>{{ blocked.adminName }}</p>
          <div class="dot"></div>
        </div>
        <div class="item__date">{{ blocked.date }}</div>
      </div>
      <div class="horizontal__line"></div>
      <div class="item__body">
        <div class="leftside">
          <img v-if="!femalePage" src="@/assets/blocked/male.svg" alt="" />
          <img v-if="femalePage" src="@/assets/blocked/female.svg" alt="" />
          <div class="id__city">
            <router-link :to="`/search/${blocked.userId}`">
              <h3>ID{{ blocked.userId }}</h3>
            </router-link>
            <p>Москва</p>
          </div>
        </div>
        <div class="rightside">
          <p>
            {{ blocked.note }}
          </p>
        </div>
      </div>
    </div>
    <div class="btn">Разблокировать</div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
h3 {
  margin: 0;
  cursor: pointer;
}
.blockitem {
  display: flex;
  justify-content: space-between;
  width: 890px;
  margin-bottom: 8px;
  .item {
    padding: 16px 24px;
    width: 678px;
    height: 131px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    .item__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title__status {
        display: flex;
        p {
          font-weight: 600;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.33);
        }
        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #2e66f5;
        }
      }
      .item__date {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.33);
      }
    }
    .horizontal__line {
      width: 630px;
      height: 0px;
      border: 1px solid #1e1f23;
      margin: 8px 0 8px 0;
    }
    .item__body {
      display: flex;
      align-items: baseline;
      .leftside {
        display: flex;
        align-items: baseline;
        padding: 7px 0px;
        width: 166px;
        height: 58px;
        margin-right: 21px;
        img {
          width: 25px;
          margin-right: 16px;
        }
        .id__city {
          h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 153.5%;
            text-decoration-line: underline;
            color: #ffffff;
          }
          p {
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            color: rgba(255, 255, 255, 0.33);
          }
        }
      }
    }
    .rightside {
      p {
        font-weight: 600;
        font-size: 15px;
        line-height: 153.5%;
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    height: 131px;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
