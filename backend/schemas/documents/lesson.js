import { GrArticle as icon } from 'react-icons/gr';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Theory Lesson',
  name: 'lesson',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).warning('The title should be longer than 2 characters'),
      description: `The title of the lesson. e.g. What are calories and why are they important`,
    },
    {
      title: 'Sub Title',
      name: 'subTitle',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).warning('The title should be longer than 2 characters'),
      description: `The title of the lesson. e.g. What are calories and why are they important`,
    },
    {
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MMMM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Illustration',
      name: 'illustration',
      type: 'image',
      description: `An image to help explain the concept. Can be an illustration or picture. (optional)`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Description',
    },

    //   {
    //     title: 'Set Builder',
    //     type: 'array',
    //     name: 'setBuilder',
    //     of: [
    //       {
    //         type: 'setBuilder', name: 'setBuilder'
    //       },
    //     ],
    //   },
    // ],
    // preview: {
    //   select: {
    //     title: 'name',
    //     subtitle: 'description',
    //     media: 'image'
    //   },
    // },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subTitle',
    },
  },
}


