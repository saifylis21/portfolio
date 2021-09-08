// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "titleContent",
  title: "Title Content",
  type: "document",
  fields: [
    {
      name: "myName",
      title: "My Name",
      type: "string",
    },
    {
      name: "mainTitle1",
      title: "Main Title 1",
      type: "string",
    },
    {
      name: "mainTitle2",
      title: "Main Title 2",
      type: "string",
    },
    {
      name: "mainTitle3",
      title: "Main Title 3",
      type: "string",
    },
    {
      name: "myPicture",
      title: "My Picture",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "whatIam",
      title: "What I Am",
      type: "string",
    },
    {
      name: "basedIn",
      title: "Based In",
      type: "string",
    }
  ],
};
