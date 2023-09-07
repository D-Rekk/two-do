"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
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
  const router = useRouter()
  const ref1 = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)
  async function handleSubmit(){
    const value ={
      title: ref1.current?.value,
      description: ref2.current?.value
    };
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({value}),
      });
      
      // const responseData = await response.json();
      router.refresh();
    } catch (err) {
      console.error('Error sending PUT request:', err);
      throw err;
    }
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
