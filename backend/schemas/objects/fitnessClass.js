import { HiUserGroup as icon } from 'react-icons/hi';
export default {
  title: 'Fitness Class',
  name: 'fitnessClass',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Will this Fitness Class be displayed on the website?`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Class Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().warning('We need a name for this class.'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: `Try and be as descriptive as possible here. Remember, the person looking at this class may have no idea what the excercises are involved. Let them know what to expect. Is the class cardio or strength building? What equipment will be used? What muscle group does the class target? Is the class suitable for begginners? What are the benefits of doing the class? `,
      validation: (Rule) => Rule.min(50).warning('Descriptions should be longer than 50 characters'),
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      description: 'This image will represent the class. Ideally we want an action shot that illustrates the class as much as possible.'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'mainImage.asset'
    },
  },
  initialValue: {
    isActive: true,
  },
};
