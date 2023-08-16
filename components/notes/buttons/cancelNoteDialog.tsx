"use client"
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


type Props = {
  id?: string
}
export function CancelNote({id} : Props) {
  const router = useRouter()
  const handleSubmit= () => {
    try{
      fetch(`http://localhost:3000/api/notes/${id}`, {
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
        <Button size="icon" className="text-red-500">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <div>
            {id}
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
