import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { GetAllFaqs } from "../../../controllers/Faq/getFaqController";
=======
import { GetAllFaqs } from "controllers/Faq/getFaqController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
async function ControllerOnGetAllFaqsController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await GetAllFaqs(request, response);
}
const preHandlerOnGetAllFaqsController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnGetAllFaqsController, preHandlerOnGetAllFaqsController };
