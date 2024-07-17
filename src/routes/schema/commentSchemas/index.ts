import {
  ControllerOnCreateComment,
  preHandlerOnCreateCommentController,
} from "./createCommentSchema";
import {
  ControllerOnGetCommentController,
  preHandlerOnGetCommentController,
} from "./getCommentSchema";
import {
  ControllerOnGetAllCommentsController,
  preHandlerOnGetAllCommentsController,
} from "./getCommentsSchema";

function commentRoutes(fastify: any, options: any, done: any) {
  fastify.get(
    "/comments/getAll",
    preHandlerOnGetAllCommentsController,
    ControllerOnGetAllCommentsController,
  );
  fastify.get(
    "/comments/:id",
    preHandlerOnGetCommentController,
    ControllerOnGetCommentController,
  );
  fastify.post(
    "/comments/create",
    preHandlerOnCreateCommentController,
    ControllerOnCreateComment,
  );

  done();
}
export { commentRoutes };
