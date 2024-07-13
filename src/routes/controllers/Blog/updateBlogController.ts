import { Blog } from "src/models/databaseModel/blog";
import { IBlog } from "src/models/interfaces/blogInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
async function UpdateBlog(req: Request, reply: Reply): Promise<void> {
  interface paramsType {
    blogId?: string;
  }
  const params = req.params as paramsType;
  const blogId = params.blogId;
  const { title, coverPictureUrl, text } = req.body as IBlog;
  try {
    const blog: IBlog | null = await Blog.findById(blogId);
    if (!blog || blog.isDeleted) {
      reply.status(404).send({ error: "Blog not found" });
      return;
    }
    const updatedBlog: IBlog | null = await Blog.findByIdAndUpdate(
      { blogId },
      { title, coverPictureUrl, text },
      { new: true },
    );

    reply.status(200).send(updatedBlog);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { UpdateBlog };
