import { Faq } from "src/models/databaseModel/faq";
import { IFaq } from "src/models/interfaces/faqInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function DeleteFaq(req: Request, reply: Reply): Promise<void> {
  interface paramsType {
    faqId?: string;
  }
  const params = req.params as paramsType;
  const faqId = params.faqId;
  try {
    const faq: IFaq | null = await Faq.findById(faqId);
    if (!faq || faq.isDeleted) {
      reply.status(404).send({ error: "faq not found" });
      return;
    }
    const deletedFaq: IFaq | null = await Faq.findByIdAndUpdate(
      { faqId },
      {
        isDeleted: true,
      },
    );

    reply.status(200).send({ message: "faq deleted successfully" });
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { DeleteFaq };
