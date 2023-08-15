import { NoteSchema } from "@/mongoose/models"
import Edit from "./edit"

export default function Note({ title, description, id }: NoteSchema) {
  return (
    <>
      <div className="container mt-2 flex justify-between rounded-sm border py-6">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <div>{description}</div>
        </div>
        <div>
          <Edit title={title} description={description} id={id}/>
        </div>
      </div>
    </>

  )
}