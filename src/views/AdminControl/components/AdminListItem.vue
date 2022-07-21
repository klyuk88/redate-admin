<script setup>
import RoleSelector from './RoleSelector.vue'
import ChooseRolePopup from './ChooseRolePopup.vue'
import { ref, computed } from 'vue'
import AdminChange from './AdminChange.vue'
import AdminProgressList from './AdminProgressList.vue'
import { useAdminStore } from '../store/AdminsStore'

const progressStore = useAdminStore()
const progressFullData = computed(() => progressStore.progressData)
const chooseRole = ref(false)
const deleteAdmin = ref(false)
const adminChange = ref(false)
const isCliked = ref(false)
defineProps({
  adminData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ChooseRolePopup
    v-if="chooseRole"
    text="Вы уверены что хотите сменить роль с администратора на модератора?"
    :admin-name="adminData.name"
    btn-text="Сменить роль"
    @close-role-modal="chooseRole = false"
  />
  <ChooseRolePopup
    v-if="deleteAdmin"
    text="Вы уверены что хотите удалить администратора?"
    :admin-name="adminData.name"
    btn-text="Удалить"
    @close-role-modal="deleteAdmin = false"
  />
  <AdminChange
    v-if="adminChange"
    :admin-name="adminData.name"
    @close-change-modal="adminChange = false"
  />
  <div class="admin__item">
    <div class="title"  @click="isCliked = !isCliked">
      <h1>{{ adminData.name }}</h1>
      <div class="dot"></div>
    </div>
    <div class="role">
      <RoleSelector />
    </div>
    <div class="work__counter" :class="{ show: isCliked }">
      {{ adminData.work }} часов
    </div>
    <div class="btn__block">
      <div class="btn" @click="adminChange = true">
        <img src="@/assets/admin/key.svg" alt="" />
      </div>
      <div class="btn" @click="deleteAdmin = true">x</div>
    </div>
  </div>
  <div class="list__content" :class="{ show: isCliked }">
    <AdminProgressList :progress-full-data="progressFullData" />
  </div>
</template>

<style lang="scss" scoped>
.list__content {
  display: none;
  &.show {
    display: block;
  }
}
.work__counter {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: none;
  &.show {
    display: block;
  }
}
.admin__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 65px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  .title {
    display: flex;
    width: 150px;
    cursor: pointer;
    h1 {
      font-weight: 600;
      font-size: 15px;
      line-height: 153.5%;
      color: #ffffff;
      margin: 0;
    }
    .dot {
      width: 5px;
      height: 5px;
      background: #2b66fc;
      border-radius: 50%;
    }
  }
  .role {
  }
  .btn__block {
    display: flex;
    align-items: center;
    gap: 10px;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 13px;
      width: 33px;
      height: 33px;
      border: 1px solid #3e74ff;
      border-radius: 11px;
      color: #3e74ff;
      cursor: pointer;
    }
  }
}
</style>
