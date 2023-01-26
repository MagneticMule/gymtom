import { GoScreenFull as icon } from 'react-icons/go';
export default {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'heroTitle',
      description: `The title will be displayed in large type in the first setion of the hero box. This will generally be the name of the page made into a statement e.g. We are GymTom || Your Own Fitness Trainer`,
    },
    {
      title: 'Sub Title',
      name: 'subtitle',
      type: 'string',
      description: `A very short one sentence description of the page content`,
      validation: (Rule) => [Rule.max(80).error('Body text must be shorter than 80 characters')],
    },
    {
      title: 'Background',
      name: 'background',
      type: 'image',
      description: `You can put an image here as the background to the hero item. It will be dimmed so that the text is easily readable. If you don't put an image here the news will be displayed on a plain, coloured background.`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Call to Action',
      name: 'callToActionButton',
      type: 'cta',
    },
  ],
};
