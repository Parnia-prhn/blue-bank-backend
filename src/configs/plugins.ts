import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";
import mongoPlugin from "../database/mongo";
import routes from "../routes";

// registers plugins
export const register = (server: FastifyInstance) => {
  server.register(cors, {
    origin: "*",
  });
  server.register(mongoPlugin);
  server.register(routes);
  return server;
};
