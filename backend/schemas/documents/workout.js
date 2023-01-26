import { BsSun as icon } from 'react-icons/bs';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Workout',
  name: 'workout',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The title will be displayed in large type at the top of the page`,
    },
    // {
    //   title: 'Target',
    //   name: 'target',
    //   type: 'target',
    // },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: `This will appear at the top of the page`,
      options: {
        hotspot: true, // Make the image editable
      },
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
      title: 'Workout Level',
      description: 'There are currently five levels of workout. Level 1 (entry level) is for the abslolute begginer who is starting the gym for the first time, perhaps a little nervous. Level 2 is for those who have been to the gym before and feel more confident in their abilities but are still just starting their fitness journey. Levels 3 4 and 5 are for the more confident and experienced gym user. ',
      name: 'excerciseLevel',
      type: 'number',
      options: {
        list: [
          { title: 'Level 1: Entry Level', value: 1, name: 'level1' },
          { title: 'Level 2: Begginner', value: 2, name: 'level2' },
          { title: 'Level 3: Intermediate', value: 3, name: 'level3' },
          { title: 'Level 4: Advanced', value: 4, name: 'level4' },
          { title: 'Level 5: Dwayne "MuthaFuggin" Johnson', value: 5, name: 'level5' },
        ],
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      description: `You can introduce the workout here and describe some of the excercises and benefits.`,
      validation: (Rule) => [Rule.max(200).error('Description should be shorter than 200 characters')],
    },
    {
      title: 'Set Builder',
      type: 'array',
      name: 'setBuilder',
      of: [
        {
          type: 'setBuilder', name: 'setBuilder'
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image'
    },
  },
};
