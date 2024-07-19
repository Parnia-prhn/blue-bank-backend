import { Blog } from "../../models/databaseModel/blog";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { paginate } from "../../services/pagination";

interface BlogQuery {
  page?: number;
  pageSize?: number;
}

async function GetAllBlogs(
  req: Request<{ Querystring: BlogQuery }>,
  reply: Reply,
): Promise<void> {
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 6;

  try {
    const result = await paginate(Blog, { page, pageSize });
    reply.status(200).send(result);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { GetAllBlogs };
