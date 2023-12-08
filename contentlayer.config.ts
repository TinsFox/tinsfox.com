import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import { getLastEditedDate } from "./lib/utils";

const baseComputedFields: ComputedFields<any> = {
  url: {
    type: "string",
    resolve: (content) => `/${content._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (content) =>
      content._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  last_edited: { type: "date", resolve: getLastEditedDate },
};

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
    ...baseComputedFields,
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Article],
});
