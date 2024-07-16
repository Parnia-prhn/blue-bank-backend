import { Faq } from "../../models/databaseModel/faq";
import { IFaq } from "../../models/interfaces/faqInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function GetAllFaqs(req: Request, reply: Reply): Promise<void> {
  try {
    const faqs: IFaq[] = await Faq.find({ isDeleted: false });
    reply.status(200).send(faqs);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { GetAllFaqs };
