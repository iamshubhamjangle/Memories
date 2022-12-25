import mongoose from "mongoose";

// createdAt: { type: Date, default: new Date() },
const PostSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: String, default: new Date(Date.now()).toISOString() },
});

const PostMessage = mongoose.model("PostMessage", PostSchema);

export default PostMessage;
