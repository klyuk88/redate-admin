import { defineStore } from 'pinia'

export const useAdminStore = defineStore('adminstore', {
  state: () => ({
    adminData: [
      {
        name: 'Катя',
      },
      {
        name: 'Вася',
      },
      {
        name: 'Оля',
      },
      {
        name: 'Дуся',
      },
      {
        name: 'Муся',
      },
      {
        name: 'Ганбатый',
      },
      {
        name: 'Каля',
      },
      {
        name: 'Валя',
      },
      {
        name: 'Мура',
      },
    ],
    progressData: [
      {
        date: '18 jul',
        verification: 7,
        moderation: 9,
        ban: 19,
        reports: 5,
        maillist: 100,
      },
      {
        date: '11 jul',
        verification: 7,
        moderation: 9,
        ban: 19,
        reports: 5,
        maillist: 100,
      },
      {
        date: '10 jul',
        verification: 7,
        moderation: 9,
        ban: 19,
        reports: 5,
        maillist: 100,
      },
      {
        date: '28 jul',
        verification: 7,
        moderation: 9,
        ban: 19,
        reports: 5,
        maillist: 100,
      },
    ],
  }),
})
