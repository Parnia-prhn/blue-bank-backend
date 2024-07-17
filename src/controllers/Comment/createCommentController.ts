import { FastifyRequest as Request, FastifyReply as Reply } from "fastify";
import { IComments } from "../../models/interfaces/IComments";
import { Comment } from "../../models/databaseModel/comments";

async function CreateComment(req: Request, reply: Reply): Promise<void> {
  const { profilePic, socialMedia, id, comment } = req.body as IComments;
  try {
    const newComment: IComments = new Comment({
      profilePic,
      socialMedia,
      id,
      comment,
    });
    await newComment.save();
    reply.status(200).send({ message: "comment created successfully" });
  } catch (err) {
    reply.status(500).send({ error: "Internal server error" });
  }
}
export { CreateComment };
