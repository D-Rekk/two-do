import NoteModel, { NoteSchema } from '../../../mongoose/models';
import { NextRequest, NextResponse } from "next/server"
import connectMongoDB from "@/mongoose/mongodb"

export type Notes = (NoteSchema & {
  _id: string
})[]

export type Note = Notes[0]

export async function POST(req: NextRequest) {
  const data: NoteSchema  = await req.json()
  const {title, description} = data
  await connectMongoDB()
  // await UserModel.create({
  //   city: "Rome",
  //   country: "Italy",
  //   name: "Anderson",
  //   role: "user",
  // })
  try {
    const newNote = new NoteModel({
      title,
      description,
    });
    await newNote.save();
    const formattedMessage = `Title: ${title}, Description: ${description}`;
    return NextResponse.json(
      {message: `${formattedMessage}` },
      { status: 201 }
    )
  } catch (err) {
      console.error('Error saving note:', err);
      return NextResponse.json(
        {error: 'An error occurred while saving the note.',},
        { status: 500 }
      );
  }
  
}

export async function GET(req: NextRequest) {
  await connectMongoDB()
  try {
    const notes: Notes = await NoteModel.find();
    return NextResponse.json({ notes }, { status: 200 });
  } catch (err) {
    console.error('Error fetching notes:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}