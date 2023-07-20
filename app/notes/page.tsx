import TopicList from "@/components/notes/topicList"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Notes(){
  return (
    <>
      <TopicList/> 
          <TopicList/> 
          <TopicList/> 
          <Link href={"/notes/addNote"}>
            <Button className="mt-3">New Note</Button>
          </Link>
    </>
  )
}