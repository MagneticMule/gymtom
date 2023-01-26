import { GrArticle as icon } from 'react-icons/gr';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Terminology Dictionary',
  name: 'terminology',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Term',
      name: 'term',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).warning('The term should be longer than 2 characters'),
      description: `The name of the term being described. e.g. Rep, Set or Progressive Overload`,
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
        source: 'term',
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
      title: 'term',
      subtitle: 'body',
    },
  },
}


