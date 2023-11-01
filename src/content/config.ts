import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const project = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    projectname: z.string(),
    description: z.string(),
    library: z.string(),
  }),
});


export const collections = {
	'blog': blog,
	'project': project,
  };
