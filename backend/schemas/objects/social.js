export default {
  title: 'Social Media',
  name: 'social',
    options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2 // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
    fieldsets: [
    {name: 'social', title: 'Social media handles'}
  ],
  fields: [
    {name: 'Facebook', type: 'string', title: 'Facebook'},
    {name: 'Twitter', type: 'string', title: 'Twitter'},
    {name: 'Instagram', type: 'string', title: 'Instagram'},
    {name: 'Youtube', type: 'string', title: 'Youtube'}
  ]
}