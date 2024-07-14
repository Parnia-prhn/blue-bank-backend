import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { CreateBlog } from "src/routes/controllers/Blog/createBlogController";
async function ControllerOnCreateBlogController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await CreateBlog(request, response);
}
const preHandlerOnCreateBlogController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnCreateBlogController, preHandlerOnCreateBlogController };
