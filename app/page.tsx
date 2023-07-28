import Note from "@/components/notes/Note"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Notes } from "./api/notes/route"
import { RootLayoutProps } from "./layout"

async function getNotes() {
  const res = await fetch(`http://localhost:3000/api/notes`)
  return res.json()
}
type fetchedNotes = {
  notes : Notes
}
export default async function IndexPage({children} :RootLayoutProps ) {

  const {notes}: fetchedNotes = await getNotes()
  console.log(notes)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-center text-2xl font-bold">Note App</h1>
        <div className="w-full">
          {notes.map(({title, description, _id}) => (
            <Note key={_id} title={title} description={description} />
          ))}
          <Link href={"/addNote"}>
            <Button className="mt-3">New Note</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
