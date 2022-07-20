<script setup>
import AdminHeader from './components/AdminHeader.vue'
import AdminList from './components/AdminList.vue'
import AdminNav from './components/AdminNav.vue'
import { useAdminStore } from './store/AdminsStore'
import { computed } from 'vue'

const adminStore = useAdminStore()
const adminsData = computed(()=> adminStore.adminData)

</script>

<template>
  <div>

    <AdminHeader />
    <AdminNav />
    <AdminList :admins-data="adminsData"/>
  </div>
</template>
<!-- <style lang="scss" scoped>
    
</style> -->
