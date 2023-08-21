import { Note } from "@/app/api/notes/route"
import { CancelNote } from "./buttons/cancelNoteDialog"
import { EditNote } from "./buttons/editNoteDialog"

export default function Edit({note}: {note: Note}){
  const {title, description, _id } = note;
  return (
    <div className="flex gap-2 max-sm:justify-end">
      <EditNote title={title} description={description} id={_id}/>
      <CancelNote note={note}/>
    </div>
  )
  

}