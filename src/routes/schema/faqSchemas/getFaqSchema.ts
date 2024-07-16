import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetAllFaqs } from "../../../controllers/Faq/getFaqController";
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
