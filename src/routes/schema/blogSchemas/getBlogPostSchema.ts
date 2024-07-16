import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
<<<<<<< HEAD
import { GetBlogPost } from "../../../controllers/Blog/getBlogPostController";
=======
import { GetBlogPost } from "controllers/Blog/getBlogPostController";
>>>>>>> 6d28629510ac4f248e732378fc97309fa63263e1

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
