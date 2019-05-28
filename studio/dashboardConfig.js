export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cec84a2cb2a0d1050565cb8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-site-studio',
                  apiId: '50943b87-248c-4d19-a956-c3d5172cbacb'
                },
                {
                  buildHookId: '5cec84a25ff1eddd8f194d5b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-site',
                  apiId: 'f7cedd7c-c857-492e-98de-88ed8e8a6b49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmit-s3660270-shahd-sideek/sanity-gatsby-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-site.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
