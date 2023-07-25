import mongoose from "mongoose"
import dbConnect from "./dbConnect";

export type T_UserSchema = {
  name: string;
  email: string;
  password: string;
  city?: string;
  useState?: string;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transaction?: any[]; // Adjust the type for transaction as needed
  role: "user" | "admin" | "superadmin";
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new mongoose.Schema<T_UserSchema>(
  {
    name: {
      type: String,
      require: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    city: String,
    useState: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transaction: Array,

    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const UserModel = (mongoose.models && "User" in mongoose.models) 
? mongoose.models.User as mongoose.Model<T_UserSchema> 
: mongoose.model<T_UserSchema>("User", UserSchema, "users");

export default UserModel

// export async function getUserById(id: string): Promise<T_UserSchema | null> {
//   await dbConnect();

//   let user: T_UserSchema|null = null;

//   try {
//       const result = await UserModel.findById(id);
//       if (result) {
//           user = result.toObject();
//       }
//   } catch (err) {
//       console.error(err);
//   }

//   return user;
// }

