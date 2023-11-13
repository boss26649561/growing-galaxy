import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      ImageURL: image(),
    }),
});

const project = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: ({ image }) =>
    z.object({
      projectname: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      ImageURL: image(),
    }),
});

export const collections = {
  blog: blog,
  project: project,
};
