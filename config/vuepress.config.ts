import { pwaPlugin } from '@vuepress/plugin-pwa';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/pwa/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/pwa/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/pwa/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#9BB0C4',
      },
    ],
  ],
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
                '/documentation/language/comment.md',
                '/documentation/language/ascii.md',
                '/documentation/language/translation_phases.md',
                '/documentation/language/punctuators.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
});
