import { Faq } from "src/models/databaseModel/faq";
import { IFaq } from "src/models/interfaces/faqInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";

async function CreateFaq(req: Request, reply: Reply): Promise<void> {
  const { question, answer } = req.body as IFaq["items"];
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
