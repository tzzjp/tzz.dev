import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    pubDate: z.date().optional(),
    lastModified: z.date().optional()
  })
});

const author = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    displayName: z.string()
  })
});

export const collections = {blog, author};