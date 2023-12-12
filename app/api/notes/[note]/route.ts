import NoteModel, { NoteSchema } from "@/mongoose/models"
import connectMongoDB from "@/mongoose/mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params } : { params: { user: string } }) {
  await connectMongoDB();
  const userId = params.user
  
  // const url = new URL(req.url)
  // const userId = url.pathname.split('/').pop(); // Extract the user ID from the URL

  try {
    const user: NoteSchema | null = await NoteModel.findById(userId as string);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, {status:404});
    } return NextResponse.json({ user });
  }
  catch (error) {
    console.error('Error retrieving user:', error);
    return NextResponse.json({ error: 'An error occurred while retrieving user data' }, {status:500});
  }
}
type Params = {
  params: {
    note: string
  }
}
export async function PUT( req: NextRequest, {params} : Params) {
  await connectMongoDB();

  const { note } = params
  const newNote = await req.json()

  try {
    // Find the note by _id and update the entire document
    const updatedNote = await NoteModel.findByIdAndUpdate(
      note,
      newNote.value,
      { new: true } // Return the updated document
    );
  
    if (!updatedNote) {
      return NextResponse.json({ error: 'Note not found' }, {status:404});
    }

    return NextResponse.json({ updatedNote }, {status:200});
  } catch (err) {
    console.error('Error updating note:', err);
    return NextResponse.json({ error: 'An error occurred while retrieving user data' }, {status:500});
  }

}

export async function DELETE( req: NextRequest, {params}:Params ){
  await connectMongoDB();
  const {note} = params
  try {
    // Find the note by _id and update the entire document
    const deletedNote = await NoteModel.findByIdAndDelete(note);
  
    if (!deletedNote) {
      return NextResponse.json({ error: 'Note not found' }, {status:404});
    }

    return NextResponse.json({ deletedNote }, {status:200});
  } catch (err) {
    console.error('Error updating note:', err);
    return NextResponse.json({ error: 'An error occurred while retrieving user data' }, {status:500});
  }

}