import mongoose from "mongoose"

export type NoteSchema = {
  title: string;
  description: string;
  id?: string;
}
const noteSchema = new mongoose.Schema<NoteSchema>(
  {
    title: {
      type: String,
      require: true,
      min: 2,
      max: 16,
    },
    description: {
      type: String,
      require: true,
      max: 255,
    },
  },
  { timestamps: true }
);

const NoteModel = (mongoose.models && "Note" in mongoose.models) 
? mongoose.models.Note as mongoose.Model<NoteSchema> 
: mongoose.model<NoteSchema>("Note", noteSchema, "notes");

export default NoteModel

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

