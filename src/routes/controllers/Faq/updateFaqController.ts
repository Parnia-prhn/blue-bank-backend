import { Faq } from "src/models/databaseModel/faq";
import { IFaq } from "src/models/interfaces/faqInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function UpdateFaq(req: Request, reply: Reply): Promise<void> {
  interface paramsType {
    faqId?: string;
  }
  const params = req.params as paramsType;
  const faqId = params.faqId;
  const { subject, items } = req.body as IFaq;
  try {
    const faq: IFaq | null = await Faq.findById(faqId);
    if (!faq || faq.isDeleted) {
      reply.status(404).send({ error: "faq not found" });
      return;
    }
    const updatedFaq: IFaq | null = await Faq.findByIdAndUpdate(
      { faqId },
      { subject, items },
      { new: true },
    );

    reply.status(200).send(updatedFaq);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { UpdateFaq };
