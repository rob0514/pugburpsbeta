import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        thumbnail: z.string().optional(),
        headerText: z.string(),
        layout: z.string().optional(),
    }),
})
const authorCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        thumbnail: z.string().optional(),
        headerText: z.string(),
        layout: z.string().optional(),
    }),
})
const productCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        thumbnail: z.string().optional(),
        headerText: z.string(),
        layout: z.string().optional(),
    }),
})

export const collections = {
    posts: blogCollection,
    authors: authorCollection,
    products: productCollection,
}