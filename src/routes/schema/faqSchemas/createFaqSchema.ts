import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { CreateFaq } from "../../../controllers/Faq/createFaqController";
=======
import { CreateFaq } from "controllers/Faq/createFaqController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
