<script setup>
import NoteItem from './NoteItem.vue'

const store = [
  {
    name: 'Света Модератор',
    date: '12.08.2022, 17:55',
    text: 'Проверила жалобу от  ID632121 ничего подобного внутринашего сервеса не нашла. Уточнила у девушки - говорит общалась тут. Видимо прсто обидел чем-то лично. Девушке в анкету занесла отметку о ложной жалобе... ',
  },
  {
    name: 'Лена',
    date: '12.08.2022, 17:55',
    text: 'Проверила жалобу от  ID632121. Фотографии выпрашивал,. а не вымогал. Вопрос закрыла.',
  },
  {
    name: 'Кирилл',
    date: '12.08.2022, 17:55',
    text: 'При регистрации указал не ту дату раождения, писал в поддержку и просил поменять.',
  },
]
</script>

<template>
  <div class="note__list">
    <li v-for="(note, index) in store" :key="index">
      <NoteItem :name="note.name" :date="note.date" :text="note.text" />
    </li>
  </div>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
