// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Ragon',
    tagline: 'Ragon network solution',
    url: 'https://ragon-server.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '@edmand46', // Usually your GitHub org/user name.
    projectName: 'Ragon', // Usually your repo name.
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    stylesheets: [{
        href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
    }],
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
            navbar: {
                title: 'Ragon',
                logo: {
                    alt: 'Ragon server logo',
                    src: 'img/ragon-logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'get-started',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://cloud.ragon-server.com',
                        label: 'Ragon Cloud',
                        position: 'right',
                    },
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
                                to: '/docs/get-started',
                            },
                        ],
                    },
                    {
                        title: 'Ragon Cloud',
                        items: [
                            {
                                label: 'Tutorial',
                                to: 'https://cloud.ragon-server.com',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            // {
                            //     label: 'Stack Overflow',
                            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            // },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/MqRPZxFhXc',
                            },
                            // {
                            //     label: 'Twitter',
                            //     href: 'https://twitter.com/docusaurus',
                            // },
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
