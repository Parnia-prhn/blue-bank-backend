import { FastifyPluginAsync } from "fastify";
import mongoose from "mongoose";

const mongoPlugin: FastifyPluginAsync = async () => {
  const uri = process.env.MONGO_URI!;

  for (let i = 0; i < 3; i++) {
    try {
      console.log(`[DATABASE] connecting to ${uri}`);
      await mongoose.connect(uri);
      return;
    } catch {
      console.log("[DATABASE] could not connect to database");
    }
  }
  console.log("[SERVER] fail to start database");
  process.exit(1);
};

export default mongoPlugin;
