export default {
  title: 'Hero TItle',
  name: 'heroTitle',
  options: {
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fieldsets: [{ name: 'heroTitleOptions', title: 'Hero Title' }],
  fields: [
    { name: 'intro', type: 'string', title: 'Inro' },
    { name: 'title', type: 'string', title: 'Page Title' }
  ],
};
