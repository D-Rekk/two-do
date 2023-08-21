"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  title: z.string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(16,{
      message: "Title must not surpass 16 characters.",
    }),
  description: z.string()
    .refine(i => i.length <= 255, {
      message: "Description can't be longer than 255 characters."
    })

})

type ProfileFormProps = {
  closeModal?: () => void;
};


export const ProfileForm = ({ closeModal }: ProfileFormProps) => {
  //Form definition using schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description:""
    },
  })
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (closeModal) closeModal();
    try {
      const response = await fetch("http://localhost:3000/api/notes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const responseData = await response.json();
      router.refresh();
    } catch (err) {
      console.error('Error sending POST request:', err);
      throw err;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="absolute"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="" {...field} />
              </FormControl>
              <FormMessage className="absolute"/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
