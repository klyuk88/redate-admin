<script setup>
import NoteItem from './NoteItem.vue'
defineProps({
  noteFullData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="note__list">
    <NoteItem
      v-for="(note, index) in noteFullData"
      :key="index"
      :noteData="note"
    />
  </div>
</template>

<!-- <style lang="scss" scoped>

</style> -->
