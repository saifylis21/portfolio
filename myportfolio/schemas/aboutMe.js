// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "aboutMeHeading",
      title: "About Me Heading",
      type: "string"
    },
    {
      name: "aboutMeText1",
      title: "About Me Text 1",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "aboutMeText2",
      title: "About Me Text 2",
      type: "array",
      of: [{ type: "block" }]
    },
  ],
};
