<script setup>
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss'


const date = ref()

const isClicked = ref(false)
</script>

<template>
  <div class="calendar" :class="{ open: isClicked }">
    <div class="date__count" @click="isClicked = !isClicked">18 jul</div>
    <div class="dropdown" :class="{ open: isClicked }">
      период <img src="@/assets/admin/dropdown__arrow.svg" alt="" />
    </div>
  </div>
  <div class="calendar__data" :class="{ open: isClicked }">
    <Datepicker
      dark="true"
      v-model="date"
      inline="true"
      multiDates="true"
      menuClassName="dp-custom-menu"
      calendarClassName="dp-custom-calendar"
      hideInputIcon="true"
      monthNameFormat="long"
      locale="ru-RU"
      autoApply
      :close-on-auto-apply="false"
      :enable-time-picker="false"
    ></Datepicker>
  </div>
</template>

<style lang="scss" scoped>
.dp-custom-menu {
  box-shadow: 0 0 6px #ffffff;
}
.dp-custom-calendar {
  .dp__calendar_item {
    border: 1px solid var(--dp-border-color-hover);
  }
}




.calendar__data {
}
.calendar {
  position: relative;
  z-index: 1;
  padding: 18px 10px;
  gap: 8px;
  width: 230px;
  height: 46px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 365px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &.open {
    width: 578px;
  }
  .date__count {
    padding: 0px 10px;
    gap: 10px;
    width: 106px;
    height: 23px;
    background: #242529;
    border-radius: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 153.5%;
    color: #2d66fa;
    cursor: pointer;
  }
  .dropdown {
    font-weight: 800;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.open {
      display: none;
    }
    img {
      margin-left: 8px;
    }
  }
}
.calendar__data {
  padding: 48px 16px 18px;
  gap: 8px;
  position: absolute;
  width: 312px;
  height: 352px;
  left: 965px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 11px 24px 11px 11px;
  display: none;
  &.open {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}



</style>
