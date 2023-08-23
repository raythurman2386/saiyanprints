"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div id="feature-products" className="py-12 bg-slate-300">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-16 text-slate-900">
          <h2 className="text-5xl font-bold mb-8">Featured products</h2>
          <p className="text-xl max-w-lg mb-4">
            Check out some of our favorite products!
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <div className="content-container">
          <ul className="grid grid-cols-1 xsmall:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-slate-900">
            {data
              ? data.map((product) => (
                  <li key={product.id} className="m-auto">
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
    </div>
  )
}

export default FeaturedProducts
