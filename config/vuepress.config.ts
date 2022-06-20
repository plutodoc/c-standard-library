import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'C Standard Library',
      description: 'A general-purpose computer programming language',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        editLink: false,
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/language/basic_concepts.md',
          },
          {
            text: 'C17',
            children: [
              {
                text: 'Changelog',
                link: 'https://en.cppreference.com/w/c/17',
              },
            ],
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Language',
              collapsible: true,
              children: [
                '/documentation/language/basic_concepts.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
