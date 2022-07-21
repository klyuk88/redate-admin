import { defineStore } from 'pinia'

export const useAdminStore = defineStore('adminstore', {
  state: () => ({
    adminData: [
      {
        name: 'Катя',
        work: 79
      },
      {
        name: 'Вася',
        work: 13
      },
      {
        name: 'Оля',
        work: 7
      },
      {
        name: 'Дуся',
        work: 791
      },
      {
        name: 'Муся',
        work: 49
      },
      {
        name: 'Ганбатый',
        work: 1
      },
      {
        name: 'Каля',
        work: 8
      },
      {
        name: 'Валя',
        work: 12
      },
      {
        name: 'Мура',
        work: 0
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
