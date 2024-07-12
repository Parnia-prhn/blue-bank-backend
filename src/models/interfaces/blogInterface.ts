import { Document} from "mongoose";

interface IBlog extends Document {
  title: string;
  coverPictureUrl: string;
  text: 
  { paragraph: string,
    imageUrl:string }[];
}
export {IBlog};