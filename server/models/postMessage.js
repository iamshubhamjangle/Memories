import mongoose from "mongoose";

// createdAt: { type: Date, default: new Date() },
const PostSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: { type: Number, default: 0 },
  createdAt: { type: String, default: new Date(Date.now()).toISOString() },
});

const PostMessage = mongoose.model("PostMessage", PostSchema);

export default PostMessage;
