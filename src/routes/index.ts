import { FastifyInstance } from "fastify";
import { blogRoutes } from "./schema/blogSchemas";
import { faqRoutes } from "./schema/faqSchemas";
import { commentRoutes } from "./schema/commentSchemas";

export default async function (app: FastifyInstance) {
  app.register(blogRoutes);
  app.register(faqRoutes);
  app.register(commentRoutes);
}
