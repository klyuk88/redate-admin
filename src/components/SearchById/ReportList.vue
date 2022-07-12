<script setup>
import ReportItem from './ReportItem.vue'

const store = [
  {
    reason: 'Оскорбления',
    id: 632121,
    date: '12.08.2022, 17:55',
    text: 'Начал оскорблять и переходить на личности после того, как отказалась встретиться. До этого общался нормально, после будто с катушек слетел. Начал угрожать, что выследит,',
  },
  {
    reason: 'Вымогательство',
    id: 632121,
    date: '12.08.2022, 17:55',
    text: 'Вымагал выслать голые фотографии, сначала предлагал денег, потом оскроблял, что если я не так красива как на одетых фото - голая, то точно уродина проказная',
  }
]
</script>

<template>
  <div class="report__list">
    <li v-for="(reasons, index) in store"
    :key="index">
      <ReportItem
        :reason="reasons.reason"
        :id="reasons.id"
        :date="reasons.date"
        :text="reasons.text"
      />
    </li>
  </div>
</template>

<style lang="scss" scoped>
    li {
        list-style: none;
    }
</style>
