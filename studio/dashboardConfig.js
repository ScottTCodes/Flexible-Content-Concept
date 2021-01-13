export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc70c534de3f068312366a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-iiut1v7n',
                  apiId: 'c9dc057f-7638-48ed-882f-0c2b7024db0e',
                },
                {
                  buildHookId: '5ffc70c634de3f02f81239c2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-k6sg2j6o',
                  apiId: '734d75ec-a962-47f1-acf2-1b759b95a279',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ScottTCodes/sanity-sapper-blog',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://sanity-sapper-blog-web-k6sg2j6o.netlify.app', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' },
    },
  ],
};
