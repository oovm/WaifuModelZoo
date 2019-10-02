module.exports = {
    dest: 'docs/.build',
    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'WaifuZoo',
            lastUpdated: 'Last Updated',
        },
        '/en/': {
            lang: 'en-US',
            title: 'WaifuZoo',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'GalAster/WaifuModelZoo',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        locales: {

            "/zh/": {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: "选择语言",
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: [
                    {
                        title: 'Introduce',
                        collapsable: true,
                        children: [
                            ['/zh/introduce/', 'Introduce'],
                            ['/zh/introduce/rank.md', 'Rank'],
                        ]
                    },
                    {
                        title: 'Wolfram',
                        collapsable: true,
                        children: [
                            ['/zh/wolfram/', 'Install'],
                            ['/zh/wolfram/random.md', 'Usage'],
                            ['/zh/wolfram/3rd.md', '3rd party API'],
                        ]
                    },
                    {
                        title: 'Python',
                        collapsable: true,
                        children: [
                            ['/zh/python/', 'Install'],
                        ]
                    },

                ]
            }
        },
        serviceWorker: true,
        markdown: {
            config: md => {
            }
        },
        plugins: {
            mathjax: {
                target: 'chtml',
                presets: [],
            },
        }
    }
}
