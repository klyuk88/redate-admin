<script setup>
import NewAdminPopup from './NewAdminPopup.vue'
import { ref } from 'vue'

const newAdmin = ref(false)
</script>

<template>
<NewAdminPopup v-if="newAdmin" @close-new-modal="newAdmin = false"/>
  <div class="moderation__header">
    <h1>Контроль админов</h1>
    <div class="btn__create" @click="newAdmin = true">
      <span>+</span>
      <p>Создать новый аккаунт</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.moderation__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 34px;
    line-height: 43px;
    color: #ffffff;
  }
  .btn__create {
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    color: #3e74ff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 206px;
    height: 33px;
    border: 1px solid #3e74ff;
    border-radius: 11px;
    cursor: pointer;
    span {
      margin-right: 4px;
    }
  }
}
</style>
