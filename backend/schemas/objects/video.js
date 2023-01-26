export default {
  title: "Video",
  name: "video",
  type: "document",
  fields: [
    {
      title: "Active",
      name: "isActive",
      type: "boolean",
      description: `Do you want this video displayed?`,
      validation: Rule => Rule.required(),
    },

    {
      title: "Title",
      name: "title",
      type: "string",
      description: `This will be the headline that appears above the video`
    },

    {
      title: "Video",
      name: "video",
      type: "string",
      validation: Rule => Rule.required().min(10).warning('Video URL should be longer than 2 characters'),
      descrition: `This is the URL to the youtube video you want to embed in the page`,
      validation: (Rule) =>
        Rule.required().uri({
        allowRelative: false, // Allow relative links
        relativeOnly: false, // Force only relative links
        scheme: ["https", "http"], // Default is ["https", "http"]
    }),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: `This is any text you want to appear below the video.`,
    },
  ],
  initialValue: {
    isActive: true
  }
}