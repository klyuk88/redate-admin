import { defineStore } from 'pinia'

export const useMailingsStore = defineStore('mailings', {
  state: () => ({
    currentTab: {},
    tabs: [
      {
        id: 1,
        title: 'Рассылки на модерации',
        count: 89,
        componentName: 'OnModeration',
        mod: 'on-moderation',
      },
      {
        id: 2,
        title: 'Активные',
        count: 102,
        componentName: 'Active',
        mod: 'active',
      },
      {
        id: 3,
        title: 'Отклоненные',
        count: null,
        componentName: 'Rejected',
        mod: 'rejected',
      },
    ],
  }),

  actions: {
    setCurrentTab(tab) {
      const tabs = [tab]

      const filteredTabs = this.tabs.filter((item) => item.id !== tab.id)

      const sortedTabs = filteredTabs.sort((a, b) => a.id - b.id)

      this.currentTab = tab
      this.tabs = [...tabs, ...sortedTabs]
    },
  },
})
