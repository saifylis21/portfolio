// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "contacts",
  title: "Contacts",
  type: "document",
  fields: [
    {
      name: "contactLinks",
      title: "Contact Links",
      type: "array",
      of: [{ type: "block" }],
    }
  ]
};
