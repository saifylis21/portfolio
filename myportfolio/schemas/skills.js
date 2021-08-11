// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skillsHeading",
      title: "Skills Heading",
      type: "string",
    },
    {
      name: "skillsText",
      title: "Skills Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skillsToolsHeading",
      title: "Skills Tools Heading",
      type: "string",
    },
    {
      name: "skillsTools",
      title: "Skills Tools",
      type: "array",
      of: [{ type: "block" }],
    }
  ],
};
