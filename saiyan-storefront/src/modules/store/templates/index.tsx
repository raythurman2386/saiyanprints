"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      <div className="flex flex-col p-12 text-center bg-slate-300 text-slate-900 w-full">
        <h2 className="text-5xl font-bold mb-8">Products</h2>
        <p className="text-lg">
          Browse our products, and if for some reason you don&apos;t find a
          print or product you are searching for, please feel free to contact
          us!
        </p>
      </div>
      <div className="flex flex-col small:flex-row small:items-start py-12 bg-slate-300 text-slate-900">
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params} />
      </div>
    </>
  )
}

export default StoreTemplate
