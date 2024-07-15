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
import {
  ControllerOnGetBlogPostController,
  preHandlerOnGetBlogPostController,
} from "./getBlogPostSchema";
function blogRoutes(fastify: any, options: any, done: any) {
  fastify.get(
    "/blogs/getAll",
    preHandlerOnGetAllBlogsController,
    ControllerOnGetAllBlogsController,
  );
  fastify.get(
    "/blogs/:blogId",
    preHandlerOnGetBlogPostController,
    ControllerOnGetBlogPostController,
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
