import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div className="p-3 flex flex-col flex-1 items-baseline">
        <div className="w-full">

        <Thumbnail thumbnail={thumbnail} size="medium"/>
        </div>
        <div className="mt-2">
          <span>{title}</span>
          <div className="flex items-center gap-x-2 mt-1">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
