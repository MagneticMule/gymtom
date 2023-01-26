import { BsFillPeopleFill as icon } from 'react-icons/bs';
import React from 'react';

export default {
  title: 'Staff',
  name: 'staffMember',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Is this person an active member of staff?`,
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('First names should be longer than 2 characters'),
    },
    {
      title: 'Second Name',
      name: 'secondName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Second names should be longer than 2 characters'),
    },
    {
      title: 'Avitar',
      name: 'avitar',
      type: 'image',
      description: `Put an image of the person here. This will be shown on the Staff page and a cropped version will be displayed next to any blog post they write.`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Biography',
      name: 'biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: `Put anything you like here but keep it on topic.
      Maybe go a little into the persons history, what they enjoy doing in their free time and maybe have them answer a silly question like "What's your favourite chocolate?"`,
      validation: (Rule) => Rule.min(50).warning('Biographies should be longer than 50 characters'),
    },
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'secondName',
      media: 'avitar',
    },
  },
  initialValue: {
    isActive: true,
  },
};
