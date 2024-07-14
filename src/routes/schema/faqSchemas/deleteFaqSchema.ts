import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { DeleteFaq } from "src/routes/controllers/Faq/deleteFaqController";
async function ControllerOnDeleteFaqController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await DeleteFaq(request, response);
}
const preHandlerOnDeleteFaqController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnDeleteFaqController, preHandlerOnDeleteFaqController };
