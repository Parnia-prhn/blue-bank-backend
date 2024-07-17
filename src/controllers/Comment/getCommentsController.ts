import { Comment } from "../../models/databaseModel/comments";
import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";

async function GetAllComments(req: Request, reply: Reply): Promise<void> {
  try {
    const comments = await Comment.find();
    if (!comments) {
      reply.status(404).send({ message: "comment not found", data: [] });
    }
    reply.status(200).send({ message: "comments found", data: comments });
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { GetAllComments };
