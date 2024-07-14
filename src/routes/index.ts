import { FastifyInstance } from "fastify";
import { blogRoutes } from "./schema/blogSchemas";
import { faqRoutes } from "./schema/faqSchemas";

export default async function (app: FastifyInstance) {
  app.register(blogRoutes);
  app.register(faqRoutes);
}
