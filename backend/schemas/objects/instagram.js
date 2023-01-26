import { GrInstagram as icon } from 'react-icons/gr';
export default {
  title: 'Instagram',
  name: 'instagram',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Will this Instagram be displayed on your web page?`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'instagram',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Instagram names should be longer than 2 characters'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: ``,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Story Video',
      type: 'cloudinary.asset',
      name: 'instagramStory',
      description: 'Add or upload an Video Instagram Story',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'text',
      validation: (Rule) => Rule.required().max(500).warning('Instagram body should be less than 500 characters'),
    },
  ],
  initialValue: {
    isActive: true,
  },
};
