import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { DeleteFaq } from "../../../controllers/Faq/deleteFaqController";
=======
import { DeleteFaq } from "controllers/Faq/deleteFaqController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
