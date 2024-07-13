import { Blog } from "src/models/databaseModel/blog";
import { IBlog } from "src/models/interfaces/blogInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function getAllBlogs(req: Request, reply: Reply): Promise<void> {
  try {
    const blogs: IBlog[] = await Blog.find({ isDeleted: false });
    reply.status(200).send(blogs);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export {getAllBlogs}; 
