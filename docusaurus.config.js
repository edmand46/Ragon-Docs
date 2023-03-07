// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Ragon',
    tagline: 'Network solution for Unity',
    url: 'https://ragon-server.com',
    baseUrl: '/',
    markdown: { mermaid: true, },
    themes: ['@docusaurus/theme-mermaid'],
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '@edmand46', // Usually your GitHub org/user name.
    projectName: 'Ragon', // Usually your repo name.
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    stylesheets: [],
    plugins: [],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'G-P8GG2T79CW',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            zoom: {
                selector: '.markdown :not(em) > img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)'
                    }
                }
            },
            navbar: {
                title: 'Ragon',
                logo: {
                    alt: 'Ragon server logo',
                    src: 'img/ragon-logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'overview',
                        position: 'left',
                        label: 'Documentation',
                    },
                    // {
                    //     to: 'blog',
                    //     label: 'Blog',
                    //     position: 'left'
                    // },
                    {
                        href: 'https://github.com/edmand46/Ragon',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        label: 'Discord',
                        href: 'https://discord.gg/MqRPZxFhXc',
                        position: 'right',

                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/overview',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/MqRPZxFhXc',
                            },
                        ],
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Eduard Kargin (Edmand46).`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp'],
            },
        }),
};

module.exports = config;
