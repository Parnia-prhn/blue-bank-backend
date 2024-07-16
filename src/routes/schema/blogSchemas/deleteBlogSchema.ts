import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { DeleteBlog } from "../../../controllers/Blog/deleteBlogController";
=======
import { DeleteBlog } from "controllers/Blog/deleteBlogController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
