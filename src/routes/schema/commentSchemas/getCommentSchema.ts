import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetComment } from "../../../controllers/Comment/getCommentController";

async function ControllerOnGetCommentController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await GetComment(request, response);
}
const preHandlerOnGetCommentController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnGetCommentController, preHandlerOnGetCommentController };
