export default {
  title: 'Call to Action',
  name: 'cta',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fieldsets: [{ name: 'ctaoptions', title: 'Call to action Button' }],
  fields: [
    { name: 'Name', type: 'string', title: 'Name' },
    { name: 'Description', type: 'text', title: 'Description', rows: 3 },

    {
      name: 'Type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Seven Day Pass', value: 'pass' },
          { title: 'Personal Training', value: 'training' },
          { title: 'Membership', value: 'membership' },
          { title: 'Arrange a Call Back', value: 'callback' },
        ],
      },
    },
  ],
};
