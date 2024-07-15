import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { DeleteBlog } from "controllers/Blog/deleteBlogController";
async function ControllerOnDeleteBlogController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await DeleteBlog(request, response);
}
const preHandlerOnDeleteBlogController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnDeleteBlogController, preHandlerOnDeleteBlogController };
