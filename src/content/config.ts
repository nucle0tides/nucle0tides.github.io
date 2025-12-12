import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    modified: z.coerce.date().optional(),
    pinned: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { posts };
