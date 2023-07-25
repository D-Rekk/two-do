import TopicList from "@/components/notes/topicList"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RootLayoutProps } from "./layout"

export default async function IndexPage({children} :RootLayoutProps ) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-center text-2xl font-bold">Note App</h1>
        <div className="w-full">
          <TopicList/> 
          <TopicList/> 
          <TopicList/> 
          <Link href={"/addNote"}>
            <Button className="mt-3">New Note</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
