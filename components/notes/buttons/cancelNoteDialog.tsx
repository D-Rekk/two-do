"use client"
import { Note } from "@/app/api/notes/route"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"



export function CancelNote({ note }: { note: Note }) {
  const {title, description, _id } = note;
  const router = useRouter()
  const handleSubmit= () => {
    try{
      fetch(`http://localhost:3000/api/notes/${_id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
      router.refresh()
    } catch (err){
      throw err
    }

  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Remove permanently this note?
          </AlertDialogDescription>
          <div>
            <div>
              <span className="font-bold">
              title:
                </span> {title}
            </div>
            <div>
              <span className="font-bold">
              description:
              </span> {description}
            </div>
            
            <div className="text-sm">
              {_id}
            </div>            
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} className="button-variant-primary bg-red-500">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
