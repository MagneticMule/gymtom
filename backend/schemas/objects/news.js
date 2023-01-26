import { BsNewspaper as icon } from 'react-icons/bs';
export default {
  title: 'News',
  name: 'news',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Do you want this section displayed?`,
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      descrition: `The title will be displayed in large type in the first setion of the home page, think about the text you want to grab the viewers attention. This could be the current status of the gym's opening hours or perhaps a sale on gym memberships.`,
    },
    {
      title: 'Background',
      name: 'background',
      type: 'image',
      description: `You can put an image here as the background to the news item. It will be dimmed so that the text is easily readable. If you don't put an image here the news will be displayed on a plain background.`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: `This is the body of the news item. Tell the gym members what's happening in around a paragraph of text, for example if the gym is closing for a while let them know why. If you are having a sale then let them know for how long the sale will run. You can style text as you like, embolden, italicize and add header.. You can also add links and images.`,
      validation: (Rule) => [
        Rule.required().min(50).warning('Body text should be longer than 50 characters.'),
        Rule.max(200).error('Body text must be shorter than 200 characters'),
      ],
    },
  ],
  initialValue: {
    isActive: true,
  },
};
