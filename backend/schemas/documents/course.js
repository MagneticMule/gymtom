import { FiBookOpen as icon } from 'react-icons/fi';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Course',
  name: 'course',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The course name will be displayed at the top of the page. Be descriptive here e.g. "8 Week weight buster"`,
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).warning('Description should be longer than 2 characters'),
      description: `A short description of this course`,
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      title: 'Theory Lessons',
      name: 'lessons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: "lesson" }
          ]
        }
      ]
    }
  ]
};
