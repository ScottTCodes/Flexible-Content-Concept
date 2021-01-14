export default {
  widgets: [
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent pages', order: '_createdAt desc', types: ['page'] },
      layout: { width: 'medium' },
    },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' },
    },
    {
      name: 'netlify',
      options: {
        sites: [
          {
            buildHookId: '5ffc70c534de3f068312366a',
            title: 'Sanity Studio',
            name: 'sanity-sapper-blog-studio-iiut1v7n',
            apiId: 'c9dc057f-7638-48ed-882f-0c2b7024db0e',
          },
          {
            buildHookId: '5ffc70c634de3f02f81239c2',
            title: 'Website',
            name: 'sanity-sapper-blog-web-k6sg2j6o',
            apiId: '734d75ec-a962-47f1-acf2-1b759b95a279',
          },
        ],
      },
    },
  ],
};
