import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  imageUrl: String,
  imageCaption: String,
});

const postModel = mongoose.model("post", postSchema);

export default postModel;
