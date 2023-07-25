import UserModel, { T_UserSchema } from "@/mongoose/models"
import connectMongoDB from "@/mongoose/mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params } : { params: { user: string } }) {
  await connectMongoDB();
  const userId = params.user
  
  // const url = new URL(req.url)
  // const userId = url.pathname.split('/').pop(); // Extract the user ID from the URL

  try {
    const user: T_UserSchema | null = await UserModel.findById(userId as string);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, {status:404});
    } return NextResponse.json({ user });
  }
  catch (error) {
    console.error('Error retrieving user:', error);
    return NextResponse.json({ error: 'An error occurred while retrieving user data' }, {status:500});
  }
}