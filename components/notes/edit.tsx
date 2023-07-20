import { Trash2, Pencil } from "lucide-react"
import { Button } from "../ui/button"

export default function Edit(){
  return (
    <div className="flex gap-2">
      <Button size="icon">
        <Pencil/>
      </Button>
      <Button size="icon" className="text-red-500">
        <Trash2 />
      </Button>
    </div>
  )
  

}