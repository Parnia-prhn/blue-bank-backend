import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { CreateBlog } from "../../../controllers/Blog/createBlogController";
=======
import { CreateBlog } from "controllers/Blog/createBlogController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
