import { defineStore } from 'pinia'
import ComplaintsIcon from '@/assets/icons/complaints.svg'
import MailingsIcon from '@/assets/icons/mailings.svg'
import VerificationIcon from '@/assets/icons/verification.svg'
import ModerationIcon from '@/assets/icons/moderation.svg'
import SupportChatIcon from '@/assets/icons/support-chat.svg'
import BlockingIcon from '@/assets/icons/blocking.svg'
import SearchIcon from '@/assets/icons/search.svg'
import MetricsIcon from '@/assets/icons/metrics.svg'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    username: 'Admin',
    menu: [
      {
        title: 'Жалобы',
        url: '/complaints',
        icon: ComplaintsIcon,
        count: 12,
        show: true,
      },
      {
        title: 'Рассылки',
        url: '/mailings',
        icon: MailingsIcon,
        count: 89,
        show: true,
      },
      {
        title: 'Верификация',
        url: '/verification',
        icon: VerificationIcon,
        count: 13,
        show: true,
      },
      {
        title: 'Модерация',
        url: '/moderation',
        icon: ModerationIcon,
        count: 61,
        show: true,
      },
      {
        title: 'Чат поддержки',
        url: '/support-chat',
        icon: SupportChatIcon,
        count: 32,
        show: true,
      },
      {
        title: 'Блокировки',
        url: '/blocking',
        icon: BlockingIcon,
        count: null,
        show: true,
      },
      {
        title: 'Поиск по ID',
        url: '/search',
        icon: SearchIcon,
        count: null,
        show: true,
      },
      {
        title: 'Метрика сайта',
        url: '/metrics',
        icon: MetricsIcon,
        count: null,
        show: true,
      },
      {
        title: 'Контроль админов',
        url: '/admin-control',
        icon: ModerationIcon,
        count: null,
        show: true,
      },
    ],
  }),
})
