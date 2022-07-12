const routes = [
  {
    path: '/complaints',
    name: 'Complaints',
    components: {
      default: () => import('@/views/Complaints'),
    },
  },
  {
    path: '/mailings',
    name: 'Mailings',
    components: {
      default: () => import('@/views/Mailings'),
    },
  },
  {
    path: '/verification',
    name: 'Verification',
    components: {
      default: () => import('@/views/Verification'),
    },
  },
  {
    path: '/moderation',
    name: 'Moderation',
    components: {
      default: () => import('@/views/Moderation'),
    },
  },
  {
    path: '/support-chat',
    name: 'SupportChat',
    components: {
      default: () => import('@/views/SupportChat'),
    },
  },
  {
    path: '/blocking',
    name: 'Blocking',
    components: {
      default: () => import('@/views/Blocking'),
    },
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      default: () => import('@/views/Search'),
    },
  },
  {
    path: '/metrics',
    name: 'Metrics',
    components: {
      default: () => import('@/views/Metrics'),
    },
  },
  {
    path: '/admin-control',
    name: 'AdminControl',
    components: {
      default: () => import('@/views/AdminControl'),
    },
  },
]

export { routes }
