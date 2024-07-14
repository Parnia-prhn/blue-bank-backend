import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetAllBlogs } from "src/routes/controllers/Blog/getBlogController";
async function ControllerOnGetAllBlogsController(
  request: Request,
  response: Reply,
  //done: (error?: Error) => {},
) {
  await GetAllBlogs(request, response);
}
const preHandlerOnGetAllBlogsController = {
  // preHandler: async function (
  //   request: Request,
  //   response: Reply,
  // ) {},
};
export { ControllerOnGetAllBlogsController, preHandlerOnGetAllBlogsController };
