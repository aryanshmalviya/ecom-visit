import { sanityFetch } from "@/sanity/lib/live"
import { defineQuery } from "next-sanity"

export const getAllProducts = async () => {
    const ALL_PRODUCTS_QUERY = defineQuery(`
            *[
                _type == "product"
            ] | order(name asc)
        `)


    try {
        // USING SANITY FETCH TO SEND THE QUERY
        const products = await sanityFetch({
            query: ALL_PRODUCTS_QUERY,
        });

        // Return the list of products or an empty array if none are found
        return products.data || [];
    } catch (error) {
        console.log("Well you are fucked fetching products:", error);
        return [];
    }
}