import mongoose, { Schema } from "mongoose";
import { IBlog } from "../interfaces/blogInterface";

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: false,
  },
  coverPictureUrl: {
    type: String,
    required: false,
  },
  text: [
    {
      paragraph: {
        type: String,
        required: false,
        default: " ",
      },
      imageUrl: {
        type: String,
        required: false,
        default: " ",
      },
    },
  ],
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Blog = mongoose.model<IBlog>("Blog", blogSchema);

export { Blog };
