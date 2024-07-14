import {
  ControllerOnCreateBlogController,
  preHandlerOnCreateBlogController,
} from "./createBlogSchema";
import {
  ControllerOnDeleteBlogController,
  preHandlerOnDeleteBlogController,
} from "./deleteBlogSchema";
import {
  ControllerOnGetAllBlogsController,
  preHandlerOnGetAllBlogsController,
} from "./getBlogSchema";
import {
  ControllerOnUpdateBlogController,
  preHandlerOnUpdateBlogController,
} from "./updateBlogSchema";

function blogRoutes(fastify: any, options: any, done: any) {
  fastify.get(
    "/blogs/getAll",
    preHandlerOnGetAllBlogsController,
    ControllerOnGetAllBlogsController,
  );
  fastify.post(
    "/blogs/create",
    preHandlerOnCreateBlogController,
    ControllerOnCreateBlogController,
  );
  fastify.put(
    "/blogs/update/:blogId",
    preHandlerOnUpdateBlogController,
    ControllerOnUpdateBlogController,
  );
  fastify.delete(
    "/blogs/delete/:blogId",
    preHandlerOnDeleteBlogController,
    ControllerOnDeleteBlogController,
  );
  done();
}
export { blogRoutes };
