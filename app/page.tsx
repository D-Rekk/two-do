import { NewNote } from "@/components/notes/buttons/newNoteDialog"
import Note from "@/components/notes/Note"
import { headers } from "next/headers"
import { Notes } from "./api/notes/route"
async function getNotes(URL: string) {
  try {
    const res = await fetch(`${URL}/api/notes`, {
      cache: "no-store"});
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
export default async function IndexPage() {
  const URL = headers().get("referer");
  const data: T_Notes |"Error" = await getNotes(URL!)
  let notes
  if (data !== "Error"){
    ({notes} = data)
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-center text-2xl font-bold">Note App</h1>
        <div className="w-full">
        {notes ?
        <>
          {notes.map((note) => (
            <Note key={note._id} note={note} />
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
