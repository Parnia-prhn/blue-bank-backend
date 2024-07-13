import { Blog } from "src/models/databaseModel/blog";
import { IBlog } from "src/models/interfaces/blogInterface";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";

async function CreateBlog(req: Request, reply: Reply): Promise<void> {
  const { title, coverPictureUrl, text } = req.body as IBlog;
  try {
    const newBlog: IBlog | null = new Blog({
      title,
      coverPictureUrl,
      text,
    });
    const savedBlog: IBlog | null = await newBlog.save();
    reply.status(200).send(savedBlog);
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { CreateBlog };
