import { Note } from "@/app/api/notes/route"
import { NoteSchema } from "@/mongoose/models"
import Edit from "./edit"

export default function Note({note}: {note: Note}) {
  const { title, description } = note
  return (
    <>
      <div className="container mt-2 flex justify-between rounded-sm border py-6">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <div>{description}</div>
        </div>
        <div>
          <Edit note={note}/>
        </div>
      </div>
    </>

  )
}