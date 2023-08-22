import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store | Saiyan Prints"
}

export default function StorePage() {
  return <StoreTemplate />
}
