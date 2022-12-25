import mongoose from "mongoose";

// createdAt: { type: Date, default: new Date() },
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

const User = mongoose.model("User", UserSchema);

export default User;
