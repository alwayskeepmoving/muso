import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/muso.png' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    todo: {
      label: '协助翻译？',
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
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开始浏览', link: '/markdown-examples' },
      {
        text: '取得联系',
        items: [
          { text: '加入我们的 QQ 群', link: '/markdown-examples' },
          { text: '给我们发 Email', link: '/markdown-examples' },
          { text: '在 X 上联系我们', link: '/markdown-examples' },
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
          { text: '支持 Muso', link: '/intro/support-us' },
          { text: '协助翻译', link: '/intro/i18n' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alwayskeepmoving/muso' },
      { icon: 'discord', link: 'https://discord.com/invite/CW2Dqbgr3s' },
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