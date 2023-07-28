import NoteModel, { NoteSchema } from '../../../mongoose/models';
import { NextResponse } from "next/server"
import connectMongoDB from "@/mongoose/mongodb"

// export async function POST(req: Request) {
//   const data: NoteSchema  = await req.json()
//   const {title, description} = data
//   await connectMongoDB()
//   // await UserModel.create({
//   //   city: "Rome",
//   //   country: "Italy",
//   //   name: "Anderson",
//   //   role: "user",
//   // })

//   const formattedMessage = `Title: ${title}, Description: ${description}`;
//   return NextResponse.json({
//     message: `${formattedMessage}` 
//   }, { status: 201 })
// }

export type Notes = (NoteSchema & {
  _id: string
})[]

export async function GET(req: Request) {
  await connectMongoDB()
  try {
    const notes: Notes = await NoteModel.find();
    console.log(notes)
    return NextResponse.json({ notes }, { status: 200 });
  } catch (err) {
    console.error('Error fetching notes:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}