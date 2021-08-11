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
  ],
};
