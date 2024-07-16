import { Blog } from "../../models/databaseModel/blog";
import { IBlog } from "../../models/interfaces/blogInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function DeleteBlog(req: Request, reply: Reply): Promise<void> {
  interface paramsType {
    blogId?: string;
  }
  const params = req.params as paramsType;
  const blogId = params.blogId;
  try {
    const blog: IBlog | null = await Blog.findById(blogId);
    if (!blog || blog.isDeleted) {
      reply.status(404).send({ error: "Blog not found" });
      return;
    }
    await Blog.findByIdAndUpdate(
      { blogId },
      {
        isDeleted: true,
      },
    );

    reply.status(200).send({ message: "blog deleted successfully" });
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { DeleteBlog };
