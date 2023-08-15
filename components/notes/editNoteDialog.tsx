"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"

type Props = {
  id?: string,
  button?: string,
  info?: string,
  title: string,
  description: string
}
export const EditNote: React.FC<Props> = ({
  id,
  button = "Edit",
  info = "Default Description",
  title = "Title value",
  description = "Note value"
}) => {
  const ref1 = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)
  function handleSubmit(){
    console.log(ref1.current?.value)
    console.log(ref2.current?.value)
    console.log("This is id: "+ id)
    // fetch("http://localhost:3000/api/notes", {method: "put"})
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{button}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
          <DialogDescription>
            {info}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Note title
            </Label>
            <Input id="title" defaultValue={title} className="col-span-3" ref={ref1}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" defaultValue={description} className="col-span-3" ref={ref2}/>
          </div>
        </div>
        <DialogTrigger asChild>
          <Button type="submit" onClick={handleSubmit}>Save changes</Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  )
}
