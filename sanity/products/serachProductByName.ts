import { defineQuery } from "next-sanity"
import { sanityFetch } from "../lib/live";

export const serachProductByName = async (searchParam: string) => {
    const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == 'product'
            && name match $searchParam
        ] | order(name asc)
    `);

    try {
        const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params: {
                searchParam: `${searchParam}*`
            }
        });

        return products.data || [];
    } catch (error) {
        console.log("Error fetching products by name", error);
        return [];        
    }
}