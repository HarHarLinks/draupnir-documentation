import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Draupnir Documentation',
  tagline: 'Draupnir Documentation Website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://the-draupnir-project.github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/draupnir-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-draupnir-project', // Usually your GitHub org/user name.
  projectName: 'draupnir-documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/the-draupnir-project/draupnir-documentation/tree/main/website',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        //{
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/the-draupnir-project/Draupnir',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Draupnir Documentation',
      logo: {
        alt: 'Draupnir Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/the-draupnir-project/Draupnir',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#draupnir:matrix.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/the-draupnir-project/Draupnir',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Draupnir Project, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
