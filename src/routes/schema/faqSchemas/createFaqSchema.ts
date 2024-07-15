import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { CreateFaq } from "controllers/Faq/createFaqController";
async function ControllerOnCreateFaqController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await CreateFaq(request, response);
}
const preHandlerOnCreateFaqController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnCreateFaqController, preHandlerOnCreateFaqController };
