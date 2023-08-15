import { NewNote } from "@/components/notes/newNoteDialog"
import Note from "@/components/notes/Note"
import { Button } from "@/components/ui/button"
import DialogForm from "@/components/notes/dialogForm"
import Link from "next/link"
import { Notes } from "./api/notes/route"
import { RootLayoutProps } from "./layout"

async function getNotes() {
  try {
    const res = await fetch('http://localhost:3000/api/notes');
    if (!res.ok) { throw new Error('Failed to fetch data'); }
    return res.json();
  }
  catch (error) {
    console.error('Error fetching data:', (error as Error).message);
    return "Error";
  }

}
export type T_Notes = {
  notes : Notes
}
export default async function IndexPage({children} :RootLayoutProps ) {

  const data: T_Notes |"Error" = await getNotes()
  let notes
  if (data !== "Error"){
    ({notes} = data)
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-center text-2xl font-bold">Note App</h1>
        <div className="w-full">
        {notes ?
        <>
          {notes.map(({title, description, _id}) => (
            <Note key={_id} id={_id} title={title} description={description} />
          ))}
          <NewNote/>
        </>
        : <h2 className="font-medium text-rose-500"> Failed to fetch, reload window</h2>
        }
        </div>
      </div>
    </section>
  )
}
