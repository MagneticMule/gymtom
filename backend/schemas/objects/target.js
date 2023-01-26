export default {
  title: 'Target',
  name: 'target',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fields: [
    { name: 'upperBody', type: 'boolean', title: 'Upper Body' },
    { name: 'lowerBody', type: 'boolean', title: 'Lower Body' },
  ],
};
