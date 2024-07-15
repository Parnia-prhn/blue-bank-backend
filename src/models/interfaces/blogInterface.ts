import { Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  coverPictureUrl: string;
  text: { title: string; paragraph: string; imageUrl: string }[];
  isDeleted: boolean;
}
export { IBlog };
