import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    todo: {
      label: '协助翻译',
      link: '/intro/i18n'
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
    logo: '/logo.svg',
    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '什么是 Muso？', link: '/intro/what-is-muso' },
          { text: '支持我们', link: '/intro/support-us' },
          { text: '协助翻译', link: '/intro/i18n' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alwayskeepmoving/muso' },
      { icon: 'x', link: 'https://x.com/ayskeepmoving' }
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