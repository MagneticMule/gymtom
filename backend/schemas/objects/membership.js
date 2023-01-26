import { AiFillIdcard as icon } from 'react-icons/ai';
import React from 'react';

export default {
  title: 'Membership',
  name: 'membership',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Is this an active membership?`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Titles should be longer than 2 characters'),
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Second names should be longer than 2 characters'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(2).warning('Number should be in Pounds and Pence e.g. £150.00').precision(2).positive(),
      initialValue: '35.55',
    },
    {
      title: 'Payment Options',
      name: 'options',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).warning('Payment Options should be longer than 5 characters'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
    },
  },
  initialValue: {
    isActive: true,
  },
};
