import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.md`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Article],
});
