import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Type: { type: Boolean, default: false }, // Indicates if the user has a premium account
});

export default mongoose.model("User", UserSchema);