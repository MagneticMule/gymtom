import { CgGym as icon } from 'react-icons/cg';
import { BsInfoSquareFill as alertIcon } from 'react-icons/bs';
import { array } from 'prop-types';
export default {
  title: 'Excercise',
  name: 'excercise',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Will this excercise be shown to the client app?`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Excercise Name',
      name: 'excerciseName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Excercise names should be longer than 2 characters'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is how the excercise will appear in the browser address bar',
      options: {
        source: 'excerciseName',
        maxLength: 96,
      },
    },
    {
      title: 'Other Names',
      description: 'Any other aliases this excercise has',
      name: 'otherNames',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
      options: {
        layout: 'grid',
        sortable: false,
      },
    },
    {
      title: 'Gategory',
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Machines', value: 'machines' },
          { title: 'Dumbell', value: 'dumbell' },
          { title: 'Barbell', value: 'barbell' },
          { title: 'Bodyweight', value: 'bodyweight' },
          { title: 'Olympic', value: 'olympic' },
          { title: 'Cardio', value: 'cardio' },
          { title: 'Plyometric', value: 'plyometric' },
          { title: 'Cables', value: 'cables' },
        ],
      },
    },

    {
      title: 'Cover Photo',
      name: 'cover',
      type: 'image',
      description: `This is the image that will appear in search results and printouts.`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Target',
      description: 'Does this excercise target the upper or lower body or both?',
      name: 'target',
      type: 'target',
    },
    {
      title: 'Muscle Groups',
      name: 'muscles',
      type: 'muscleGroup',
    },
    {
      title: 'Introduction',
      description:
        'A short overview of the excercise. This will appear in any search results and help the user understand what the excercise accomplishes',
      name: 'introduction',
      type: 'text',
      rows: 6,
      validation: (Rule) =>
        Rule.required().min(20).warning('Excercise instroduction should be longer than 20 characters'),
    },
    {
      title: 'Steps',
      description:
        'The logical process for conducting the excercise split into individual steps. Keep these short and to the point',
      name: 'steps',
      type: 'array',
      editModal: 'fullscreen',
      of: [{ type: 'text', rows: 3 }],
    },
    {
      name: 'note',
      type: 'note',
      options: {
        icon: alertIcon,
        headline: 'This is a Tip!',
        message: `A tip will look something like this!`,
        tone: 'positive'
      }
    },
    {
      title: 'Tips',
      description: 'Optional',
      name: 'tips',
      type: 'array',
      editModal: 'fullscreen',
      of: [{ type: 'text', rows: 6 }],
    },
    // {
    //   title: 'Video',
    //   name: 'video',
    //   type: 'string',
    //   description: `Put a link to a youtube video here`,
    // },
    {
      type: 'cloudinary.asset',
      name: 'CloudVideo',
      description: 'Use a video from our library or upload one of your own',
    },
    {
      title: 'Meta Tags',
      description:
        'These will be used in search. Think about words and phrases that users may use to try and find this escercise',
      name: 'metaTags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Substitutions',
      name: 'substitution',
      description: 'Excercises that can be used interchangibly with the current excercise',
      type: 'array',
      validation: (Rule) => Rule.unique(),
      of: [{ type: 'reference', to: { type: 'excercise' } }],
      // options: {
      //   filter: ({ document }) => {
      //     return {
      //       filter: 'excerciseName != $excercise',
      //       params: { excercise: excercise.excerciseName },
      //     };
      //   },
      // },
    },
  ],
  preview: {
    select: {
      title: 'excerciseName',
      subtitle: 'introduction',
      media: 'cover',
    },
  },
  initialValue: {
    isActive: true,
    excerciseLevel: 1
  },
};
