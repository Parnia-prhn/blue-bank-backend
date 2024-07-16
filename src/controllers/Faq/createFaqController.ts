import { Faq } from "../../models/databaseModel/faq";
import { IFaq } from "../../models/interfaces/faqInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";

async function CreateFaq(req: Request, reply: Reply): Promise<void> {
  const { subject, items } = req.body as IFaq;
  try {
    const newFaq: IFaq | null = new Faq({
      subject,
      items,
    });
    const savedFaq: IFaq | null = await newFaq.save();
    reply.status(200).send(savedFaq);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { CreateFaq };
