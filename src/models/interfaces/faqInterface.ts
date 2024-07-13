import { Document } from "mongoose";

interface IFaq extends Document {
  subject: string;
  items: { question: string; answer: string; isDeleted: boolean }[];
  isDeleted: boolean;
}
export { IFaq };
