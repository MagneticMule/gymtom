export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Recent Excercises and Workouts',
        types: ['excercise'],
        showCreateButton: true,
        createButtonText: 'Create a new Excercise'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Recent Workouts',
        types: ['workout'],
        showCreateButton: true,
        createButtonText: 'Create a new Workout'
      }
    },
    // {
    //   name: 'netlify',
    //   layout: {
    //     width: 'small',
    //     height: 'small',
    //   },
    //   options: {
    //     title: 'Website: Hosted on Netlify',
    //     sites: [
    //       // {
    //       //   title: 'Sanity Studio',
    //       //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
    //       //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
    //       //   name: 'sanity-gatsby-blog-20-studio',
    //       // },
    //       {
    //         title: 'Fitness Republic Website',
    //         apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
    //         buildHookId: process.env.SANITY_STUDIO_BUILDHOOKID,
    //         name: 'fitnessrepublic',
    //       },
    //     ],
    //   },
    // },
    {
      name: 'project-info',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
  ],
};