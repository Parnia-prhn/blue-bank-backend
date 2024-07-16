import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { GetAllBlogs } from "../../../controllers/Blog/getBlogController";
// Define the expected query parameters interface
interface BlogQuery {
  page: number;
  pageSize: number;
}

// Define the request type with the expected query parameters
type BlogRequest = Request<{ Querystring: BlogQuery }>;

async function ControllerOnGetAllBlogsController(
  request: BlogRequest,
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
