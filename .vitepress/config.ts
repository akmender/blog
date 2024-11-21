import { defineConfig } from 'vitepress'
import Theme from 'vitepress-theme-open17'
import baseConfig from 'vitepress-theme-open17/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
 extends: baseConfig,
  title: "程序笔记",
  description: "我的个人备忘录",
  themeConfig: {
	outDir: './dist',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
