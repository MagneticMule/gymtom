import { BsFileRichtext as icon} from 'react-icons/bs';

export default {

  // Setup a 'document' type to house the page builder field
  title: "Web Page",
  name: "page",
  type: "document",
  icon,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Name should be longer than 2 characters'),
      description: `This is the title of the page as it will appear in the main menu and any other navigation such as the site footer. Use a simple, single word title if you can e.g. "About Us", "Store", "Personal Training".`
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' },
        { type: 'video' },
        { type: 'news'}
      ]
    }
  ]
}