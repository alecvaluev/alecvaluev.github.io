import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import getFiles from './getFiles';

export default defineUserConfig({
    lang: 'en-US',
    title: 'Notebook',
    theme: defaultTheme({
        navbar: [
          { text: '홈', link: '/' },
          { text: 'CS', link: '/CS/' },
          { text: 'S-Dev', link: '/dev/' },
          { text: 'Lang', link: '/lang/' },
        ],
        sidebar: {
          '/CS/': getFiles('cs'),
          '/dev/': getFiles('dev'),
          '/lang/': getFiles('lang'),
          '/': [''],
        },
        sidebarDepth: 1,
        contributors: false,
      }),
      plugins: [
        /* docsearchPlugin({
          appId: '516V9TFBMD',
          apiKey: 'ebc82cf2e22f5f7594d6ef258c904439',
          indexName: 'giwon',
          locales: {
            '/': {
              placeholder: '검색',
              translations: {
                button: {
                  buttonText: 'Search Documentation',
                },
              },
            },
          },
        }) */
    ]
})