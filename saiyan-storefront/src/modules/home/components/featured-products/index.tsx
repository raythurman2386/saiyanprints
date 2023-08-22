"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12 bg-neutral-content">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16 text-slate-900">
          <h2 className="text-5xl font-bold mb-8">Featured products</h2>
          <p className="text-xl max-w-lg mb-4">
            Check out some of our favorite products!
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8 text-slate-900">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
