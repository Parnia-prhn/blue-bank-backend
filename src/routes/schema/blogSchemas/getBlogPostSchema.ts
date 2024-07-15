import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetBlogPost } from "controllers/Blog/getBlogPostController";

async function ControllerOnGetBlogPostController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await GetBlogPost(request, response);
}
const preHandlerOnGetBlogPostController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnGetBlogPostController, preHandlerOnGetBlogPostController };
