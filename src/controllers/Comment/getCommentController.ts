import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { Comment } from "../../models/databaseModel/comments";

async function GetComment(req: Request, reply: Reply): Promise<void> {
  const commentId = req.headers.id;
  try {
    const result = await Comment.findById(commentId);
    if (result)
      reply.status(200).send({ message: "comment found", data: result });
    else reply.status(404).send({ message: "no Comment found", data: "" });
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { GetComment };
