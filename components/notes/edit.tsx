import { NoteSchema } from "@/mongoose/models"
import { CancelNote } from "./cancelNote"
import { EditNote } from "./editNoteDialog"

export default function Edit({title, description, id}: NoteSchema){
  return (
    <div className="flex gap-2">
      <EditNote title={title} description={description} id={id}/>
      <CancelNote id={id}/>
    </div>
  )
  

}