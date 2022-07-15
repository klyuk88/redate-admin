import { defineStore } from 'pinia'

export const useMailingsStore = defineStore('mailings', {
  state: () => ({
    currentTab: {},
    tabs: [
      {
        id: 1,
        title: 'Рассылки на модерации',
        count: 89,
        componentName: 'MailingsOnModeration',
        mod: 'on-moderation',
      },
      {
        id: 2,
        title: 'Активные',
        count: 102,
        componentName: 'MailingsActive',
        mod: 'active',
      },
      {
        id: 3,
        title: 'Отклоненные',
        count: null,
        componentName: 'MailingsRejected',
        mod: 'rejected',
      },
    ],
  }),

  actions: {
    setCurrentTab(tab) {
      const tabs = [tab]

      const filteredTabs = this.tabs.filter((item) => item.id !== tab.id)

      const sortedTabs = filteredTabs.sort((a, b) => a.id - b.id)

      this.tabs = [...tabs, ...sortedTabs]

      this.currentTab = tab
    },
  },
})
