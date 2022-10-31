import { z } from "zod";
import { protectedProcedure } from "../../../trpc";

export const del = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .mutation(({ ctx, input }) => {
    ctx.prisma.board.delete({
      where: { id_adminId: { adminId: ctx.session.user.id, id: input.id } },
    });
  });
