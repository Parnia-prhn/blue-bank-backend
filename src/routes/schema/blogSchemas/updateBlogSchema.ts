import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { UpdateBlog } from "../../../controllers/Blog/updateBlogController";
=======
import { UpdateBlog } from "controllers/Blog/updateBlogController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1
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
