import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    todo: {
      label: '协助翻译？',
      link: '/i18n'
    },
    // en: {
    //   label: 'English',
    //   lang: 'en-US',
    //   link: '/en'
    // },
    // jp: {
    //   label: '日本語',
    //   lang: 'ja-JP',
    //   link: '/jp'
    // },
  },
  title: "Muso",
  description: "",
  themeConfig: {
    i18nRouting: false,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Enterance',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '在 GPL 3 许可证下发布',
      copyright: `Copyright © 2019-${new Date().getFullYear()} AlwaysKeepMoving`
    }
  }

})