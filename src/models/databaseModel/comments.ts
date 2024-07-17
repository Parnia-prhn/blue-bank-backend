import mongoose, { Schema } from "mongoose";
import { IComments } from "../interfaces/IComments";

const commentSchema = new Schema<IComments>({
  profilePic: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model<IComments>("Comment", commentSchema);

export { Comment };
