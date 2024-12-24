import { Product } from '@/sanity.types'
import Link from 'next/link';

function ProductThumb({product}: {product:Product}) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
        href={`/product/${product.slug?.current}`}
        className={`group flex flex-col bg-white border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
     Product
    </Link>
  )
}

export default ProductThumb