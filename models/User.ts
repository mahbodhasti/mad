import { Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// ⬅️ این export خیلی مهمه
const User = models.User || model<IUser>("User", UserSchema);

export { User };
