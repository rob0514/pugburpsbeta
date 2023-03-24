import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        thumbnail: z.string().optional(),
        layout: z.string().optional(),
    }),
})

export const collections = {
    posts: blogCollection,
}