import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    username: 'Admin',
    menu: [
      {
        title: 'Жалобы',
        url: '/complaints',
        icon: null,
        count: 12,
        show: true,
      },
      {
        title: 'Рассылки',
        url: '/mailings',
        icon: null,
        count: 89,
        show: true,
      },
      {
        title: 'Верификация',
        url: '/verification',
        icon: null,
        count: 13,
        show: true,
      },
      {
        title: 'Модерация',
        url: '/moderation',
        icon: null,
        count: 61,
        show: true,
      },
      {
        title: 'Чат поддержки',
        url: '/support-chat',
        icon: null,
        count: 32,
        show: true,
      },
      {
        title: 'Блокировки',
        url: '/blocking',
        icon: null,
        count: null,
        show: true,
      },
      {
        title: 'Поиск по ID',
        url: '/search',
        icon: null,
        count: null,
        show: true,
      },
      {
        title: 'Метрика сайта',
        url: '/metrics',
        icon: null,
        count: null,
        show: true,
      },
      {
        title: 'Контроль админов',
        url: '/admin-control',
        icon: null,
        count: null,
        show: true,
      },
    ],
  }),
})
