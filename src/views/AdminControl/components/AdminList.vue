<script setup>
import AdminListItem from './AdminListItem.vue'
import Scrollbar from '../../../components/Scrollbar/Scrollbar.vue'

defineProps({
  adminsData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Scrollbar>
    <div class="admin__list">
      <AdminListItem
        v-for="(adminData, index) in adminsData"
        :key="index"
        :admin-data="adminData"
        class="list"
      />
    </div>
  </Scrollbar>
</template>

<style lang="scss" scoped>
.admin__list {
  width: 100%;
  height: calc(100vh - 220px);
}
</style>
