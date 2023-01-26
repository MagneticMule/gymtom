
export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'staffMember',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'staffMember.firstName',
      subtitle: 'staffMember.secondName',
      media: 'staffMember.avitar.asset',
    },
  },
};