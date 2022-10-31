import { z } from "zod";
import { protectedProcedure } from "../../../trpc";

export const edit = protectedProcedure
  .input(
    z.object({
      id: z.string().uuid(),
      coverPhoto: z.string().url().optional(),
      title: z.string().min(5).optional(),
      isPrivate: z.boolean().optional(),
      description: z.string().optional(),
    })
  )
  .mutation(({ ctx, input: { id, ...input } }) => {
    ctx.prisma.board.update({
      data: { ...input },
      where: { id, adminId: ctx.session.user.id },
    });
  });
