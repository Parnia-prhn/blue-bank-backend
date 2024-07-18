import fastify from "fastify";
import path from "path";
import { config, register } from "./configs";

//import { redisClient } from "./database/redis";

export const isDev = process.env.NODE_ENV !== "production";
if (isDev) config({ path: path.resolve(process.cwd(), "dev.env") });
else config({ path: path.resolve(process.cwd(), "prod.env") });

const server = fastify();
//#region add cors to app
register(server);

// server.get("/", async (request: any, reply: any) => {});
server.listen(
  { port: +process.env.PORT!, host: process.env.HOST! },
  async (err: any, address: any) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`[SERVER] Server listening at ${address}`);
    console.log(`[SERVER] Server Running at ${process.env.NODE_ENV} mode`);
  },
);
