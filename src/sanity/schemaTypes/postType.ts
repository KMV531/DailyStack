import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

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
      title: "Title",
      type: "object",
      fields: [
        defineField({
          name: "fr",
          type: "string",
          title: "French Title",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "en",
          type: "string",
          title: "English Title",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // -------------------------
    // SLUG (from EN title)
    // -------------------------
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title.en", // Slug always from English version
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // -------------------------
    // MAIN IMAGE
    // -------------------------
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    // -------------------------
    // CATEGORIES
    // -------------------------
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),

    // -------------------------
    // PUBLISH DATE
    // -------------------------
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),

    // -------------------------
    // MULTILINGUAL EXCERPT
    // -------------------------
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "object",
      fields: [
        defineField({
          name: "fr",
          type: "text",
          title: "French Excerpt",
        }),
        defineField({
          name: "en",
          type: "text",
          title: "English Excerpt",
        }),
      ],
    }),

    // -------------------------
    // MULTILINGUAL BODY
    // -------------------------
    defineField({
      name: "body",
      title: "Body",
      type: "object",
      fields: [
        defineField({
          name: "fr",
          type: "blockContent",
          title: "French Content",
        }),
        defineField({
          name: "en",
          type: "blockContent",
          title: "English Content",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title.en",
      category: "categories[0].title",
      media: "mainImage",
    },
    prepare(selection) {
      return {
        title: selection.title || "Untitled",
      };
    },
  },
});
