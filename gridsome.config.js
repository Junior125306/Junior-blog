// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const marked = require('marked')
// const yaml = require('js-yaml')

module.exports = {
  siteUrl: 'https://blog.zz-yy.top',
  siteName: "Junior's Blog",
  siteDescription: '程序员 / 社畜 / 学生',

  templates: {
    Post: '/:year/:month/:slug',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    //订阅插件，暂时不需要
    // {
    //   use: '@microflash/gridsome-plugin-feed',
    //   options: {
    //     contentTypes: ['Post'],
    //     feedOptions: {
    //       title: "Junior's Blog",
    //       description: '程序员 / 社畜 / 学生',
    //       image: 'https://blog.spencerwoo.com/av.png',
    //       favicon: 'https://blog.spencerwoo.com/av.png',
    //     },
    //     rss: {
    //       enabled: true,
    //       output: '/posts/index.xml',
    //     },
    //     htmlFields: ['description', 'content'],
    //     enforceTrailingSlashes: false,
    //     filterNodes: node => node.published,
    //     nodeToFeedItem: node => ({
    //       title: node.title,
    //       date: node.date,
    //       content: marked(node.content),
    //     }),
    //   },
    // },
    //谷歌统计插件，不会用
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-179298528-1',
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      useBuiltIns: true,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      slug: true,
      autolinkHeadings: true,
      autolinkClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
        'gridsome-plugin-remark-container',
        'gridsome-remark-katex',
        'gridsome-remark-figure-caption',
      ],
      config: {
        footnotes: true,
      },
      // grayMatter: {
      //   engines: {
      //     yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      //   },
      // },
    },
  },
}
