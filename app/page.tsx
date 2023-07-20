import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { RootLayoutProps } from "./layout"

export default async function IndexPage({children} :RootLayoutProps ) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        {children}
      </div>
    </section>
  )
}
