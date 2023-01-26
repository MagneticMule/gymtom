import { MdAddAlert as icon } from 'react-icons/md';
export default {
  name: 'alert',
  title: 'Site Alert',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For internal use only.',
    },
    {
      name: 'text',
      title: 'Alert text',
      description: 'This is the text the visitor will see',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    // {
    //   name: 'callToAction',
    //   title: 'Call to Action',
    //   type: 'cta'
    // },
    {
      name: 'style',
      title: 'Banner style',
      type: 'string',
      options: {
        // Creates a dropdown to select the strings
        list: ['Sale', 'Promo', 'News'],
      },
    },
  ],
};
