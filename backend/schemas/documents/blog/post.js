import { CgFileDocument as icon } from 'react-icons/cg';
import { format } from 'date-fns';

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is how the article will appear in the browser address bar',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing later',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'This goes summary pages on Google, when people share your post in social media',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'staffMember' }],
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      title: 'Call to Action',
      name: 'callToActionButton',
      type: 'cta',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt'.slice(0, 50),
      media: 'mainImage',
    },
  },
  // preview: {
  //   select: {
  //     title: 'title',
  //     publishedAt: 'publishedAt',
  //     slug: 'slug',
  //     media: 'mainImage'
  //   },
  //   prepare ({title = 'No title', publishedAt, slug = {}, media}) {
  //     const dateSegment = format(publishedAt, 'YYYY/MM')
  //     const path = `/${dateSegment}/${slug.current}/`
  //     return {
  //       title,
  //       media,
  //       subtitle: publishedAt ? path : 'Missing publishing date'
  //     }
  //   }
  // }
};
