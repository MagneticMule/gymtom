import { BsCardList as icon } from 'react-icons/bs';
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
