import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { UpdateFaq } from "src/routes/controllers/Faq/updateFaqController";
async function ControllerOnUpdateFaqController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await UpdateFaq(request, response);
}
const preHandlerOnUpdateFaqController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnUpdateFaqController, preHandlerOnUpdateFaqController };
