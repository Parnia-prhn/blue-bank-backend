import { Document} from "mongoose";

interface IFaq extends Document {
  subject: string;
  items: 
  { question: string,
    answer:string }[];
}
export {IFaq};