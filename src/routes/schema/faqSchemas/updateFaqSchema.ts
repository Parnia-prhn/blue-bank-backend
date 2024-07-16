import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { UpdateFaq } from "../../../controllers/Faq/updateFaqController";
=======
import { UpdateFaq } from "controllers/Faq/updateFaqController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
