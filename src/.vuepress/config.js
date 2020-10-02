const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TypeORM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchPlaceholder: 'Search',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/typeorm/typeorm',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    displayAllHeaders: false,
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Getting Started',
        path: '/',
      },
      {
        title: 'Connection',
        children: [
          ['/connection/', 'Working with connection'],
          ['/connection/using-ormconfig', 'Using ormconfig.json'],
          '/connection/connection-options',
          ['/connection/multiple-connections', 'Multiple Connections'],
          ['/connection/connection-api', 'Connection APIs'],
        ],
      },
      {
        title: 'Entity',
        children: [
          ['/entity/entities', 'What is entity?'],
          '/entity/embedded-entities',
          '/entity/entity-inheritance',
          '/entity/tree-entities',
          '/entity/view-entities',
          '/entity/separating-entity-definition',
        ],
      },
      {
        title: 'Relations',
        children: [
          ['/relations/', 'What are relations?'],
          ['/relations/one-to-one-relations', 'One-to-One'],
          [
            '/relations/many-to-one-one-to-many-relations',
            'Many-to-One and One-to-Many',
          ],
          ['/relations/many-to-many-relations', 'Many-to-Many'],
          '/relations/eager-and-lazy-relations',
          '/relations/relations-faq',
        ],
      },
      {
        title: 'Entity Manager and Repository',
        children: [
          ['/entity-manager-and-repository/working-with-entity-manager', 'Working with EntityManager'],
          '/entity-manager-and-repository/working-with-repository',
          '/entity-manager-and-repository/find-options',
          '/entity-manager-and-repository/custom-repository',
          [
            '/entity-manager-and-repository/entity-manager-api',
            'Entity Manager API',
          ],
          ['/entity-manager-and-repository/repository-api', 'Repository API'],
        ],
      },
      {
        title: 'Query Builder',
        children: [
          '/query-builder/select-query-builder',
          '/query-builder/insert-query-builder',
          '/query-builder/update-query-builder',
          '/query-builder/delete-query-builder',
          '/query-builder/relational-query-builder',
          ['/query-builder/caching', 'Caching Results'],
        ],
      },
      {
        title: 'Advanced Topics',
        children: [
          '/advanced-topics/migrations',
          '/advanced-topics/transactions',
          '/advanced-topics/indices',
          ['/advanced-topics/listeners-and-subscribers', 'Listeners and Subscribers'],
          '/advanced-topics/logging',
          '/advanced-topics/using-cli',
        ],
      },
      {
        title: 'Guides',
        children: [
          '/guides/active-record-data-mapper',
          ['/guides/mongodb', 'Working with MongoDB'],
          '/guides/validation',
          ['/guides/example-with-express', 'Example with Express'],
          '/guides/using-with-javascript',
          ['/guides/sequelize-migration', 'Migration from Sequelize'],
        ],
      },
      {
        title: 'Help',
        children: [
          '/help/faq',
          '/help/supported-platforms',
          '/help/decorator-reference',
          '/help/roadmap',
          'changelog',
          '/help/support',
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', 'fulltext-search',],
};
