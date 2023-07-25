import { T_UserSchema } from '../../../mongoose/models';
import { NextResponse } from "next/server"
import connectMongoDB from "@/mongoose/mongodb"

export async function POST(req: Request) {
  const data: T_UserSchema  = await req.json()
  const {city, country, name, role} = data
  await connectMongoDB()
  // await UserModel.create({
  //   city: "Rome",
  //   country: "Italy",
  //   name: "Anderson",
  //   role: "user",
  // })

  const jsonString = JSON.stringify(data);
  const formattedData = JSON.parse(jsonString);
  const formattedMessage = `City: ${formattedData.city}, Country: ${formattedData.country}, Name: ${formattedData.name}, Role: ${formattedData.role}`;
  return NextResponse.json({
    message: `${formattedMessage}` 
  }, { status: 201 })
}