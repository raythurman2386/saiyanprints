"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import { kaushan_script } from "app/layout"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div
        className={`flex flex-col gap-y-6 xsmall:flex-row items-start justify-between ${kaushan_script.className}`}
      >
        <div>
          <Link
            href="/"
            className="text-xl-semi uppercase text-green-500/90 hover:text-green-700/90"
          >
            Saiyan Prints
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Directory</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/store">Store</Link>
              </li>
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:justify-between ${kaushan_script.className}`}
      >
        <span className="text-xsmall-regular text-slate-400">
          © Copyright 2023 Saiyan Prints
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
