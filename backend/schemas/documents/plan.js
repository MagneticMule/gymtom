import { RiCalendarTodoLine as icon } from 'react-icons/ri';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Plan',
  name: 'plan',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The plan name will be displayed at the top of the page. Be descriptive here e.g. "5 Day Muscle Builder"`,
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Cover Image',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Workouts',
      description: 'Feedback welcome. Think of each of these entries as a day of the week. So if you want a three day plan then add the workouts as needed and fill each other day as a rest day',
      name: 'planBuilder',
      type: 'array',
      of: [
        { type: 'planBuilder' }
      ]
    },
  ],
  preview: {
    select: {
      title: `name`,
      subtitle: 'description',
      media: 'mainImage.asset'
    },
  }
};
