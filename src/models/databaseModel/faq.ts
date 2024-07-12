import mongoose, { Schema } from "mongoose";
import { IFaq } from "../interfaces/faqInterface";

const faqSchema = new Schema<IFaq>({
  subject: {
    type: String,
    required: false,
  },
  items: [
    {
      question: {
        type: String,
        required: false,
        default: " ",
      },
      answer: {
        type: String,
        required: false,
        default: " ",
      },
    },
  ],
});

const Faq = mongoose.model<IFaq>("Faq", faqSchema);

export { Faq};