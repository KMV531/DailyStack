import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    // -------------------------
    // MULTILINGUAL TITLE
    // -------------------------
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // -------------------------
    // LINK
    // -------------------------

    defineField({
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    // -------------------------
    // PUBLISH DATE
    // -------------------------
    defineField({
      name: "publishedAt",
      type: "string",
    }),

    // -------------------------
    // SOURCE
    // -------------------------
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      source: "source", // Select the source field
    },
    prepare(selection) {
      return {
        title: selection.title || "Untitled",
        subtitle: selection.source || "No source", // Use 'subtitle' not 'description'
      };
    },
  },
});
