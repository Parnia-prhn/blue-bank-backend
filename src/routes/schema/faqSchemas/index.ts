import {
  ControllerOnCreateFaqController,
  preHandlerOnCreateFaqController,
} from "./createFaqSchema";
import {
  ControllerOnDeleteFaqController,
  preHandlerOnDeleteFaqController,
} from "./deleteFaqSchema";
import {
  ControllerOnGetAllFaqsController,
  preHandlerOnGetAllFaqsController,
} from "./getFaqSchema";
import {
  ControllerOnUpdateFaqController,
  preHandlerOnUpdateFaqController,
} from "./updateFaqSchema";

function faqRoutes(fastify: any, options: any, done: any) {
  fastify.get(
    "/Faqs/getAll",
    preHandlerOnGetAllFaqsController,
    ControllerOnGetAllFaqsController,
  );
  fastify.post(
    "/faqs/create",
    preHandlerOnCreateFaqController,
    ControllerOnCreateFaqController,
  );
  fastify.put(
    "/faqs/update/:faqId",
    preHandlerOnUpdateFaqController,
    ControllerOnUpdateFaqController,
  );
  fastify.delete(
    "/faqs/delete/:faqId",
    preHandlerOnDeleteFaqController,
    ControllerOnDeleteFaqController,
  );
  done();
}
export { faqRoutes };
