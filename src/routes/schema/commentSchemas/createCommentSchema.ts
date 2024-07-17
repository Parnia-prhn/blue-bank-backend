import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { CreateComment } from "../../../controllers/Comment/createCommentController";
async function ControllerOnCreateComment(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await CreateComment(request, response);
}
const preHandlerOnCreateCommentController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnCreateComment, preHandlerOnCreateCommentController };
