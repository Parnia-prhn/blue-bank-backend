import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetAllComments } from "../../../controllers/Comment/getCommentsController";

async function ControllerOnGetAllCommentsController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await GetAllComments(request, response);
}
const preHandlerOnGetAllCommentsController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export {
  ControllerOnGetAllCommentsController,
  preHandlerOnGetAllCommentsController,
};
