import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        thumbnail: z.string().optional(),
        headerText: z.string(),
        layout: z.string().optional(),
        categories: z.array(z.string()),
    }),
})

export const collections = {
    posts: blogCollection,
}