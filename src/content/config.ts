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
const authorCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        email: z.string(),
        thumbnail: z.string().optional(),
        bio: z.string(),
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
        categories: z.array(z.string()),
    }),
})

export const collections = {
    products: productCollection,
    posts: blogCollection,
    authors: authorCollection,
}