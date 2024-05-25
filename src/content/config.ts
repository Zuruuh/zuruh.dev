import { defineCollection, z } from 'astro:content';

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tag: z.string(),
      publishedAt: z.coerce.date(),
    }),
  }),
};
