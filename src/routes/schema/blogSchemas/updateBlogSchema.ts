import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { UpdateBlog } from "../../../controllers/Blog/updateBlogController";
async function ControllerOnUpdateBlogController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await UpdateBlog(request, response);
}
const preHandlerOnUpdateBlogController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnUpdateBlogController, preHandlerOnUpdateBlogController };
