import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    modified: z.coerce.date().optional(),
    pinned: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    headerImage: image().optional(),
  }),
});

const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    timestamp: z.coerce.date(),
    weather: z.string().optional(),
    coffee: z.number().optional(),
  }),
});

const currents = defineCollection({
  type: 'data',
  schema: z.record(
    z.union([
      z.string(),
      z.object({
        text: z.string(),
        url: z.string().optional(),
      }),
    ])
  ),
});

export const collections = { posts, changelog, currents };
