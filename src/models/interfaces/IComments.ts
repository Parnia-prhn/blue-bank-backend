import { Document } from "mongoose";

interface IComments extends Document {
  profilePic: string;
  socialMedia: string;
  id: string;
  comment: string;
}
export { IComments };
