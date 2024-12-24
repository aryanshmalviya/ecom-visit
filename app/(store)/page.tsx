
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/products/getAllCategories";
import { getAllProducts } from "@/sanity/products/getAllProducts";

export default async function Home() {

  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <ProductsView 
        products={products}
        categories={categories}
      />
    </div>
  );
}
