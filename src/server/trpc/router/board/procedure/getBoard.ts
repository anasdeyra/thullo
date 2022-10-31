import { z } from "zod";
import { protectedProcedure } from "../../../trpc";

export const getBoard = protectedProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ ctx, input }) => {
    const board = await ctx.prisma.board.findFirst({
      where: {
        id: input.id,
        OR: [
          { adminId: ctx.session.user.id },
          { members: { some: { memberId: ctx.session.user.id } } },
        ],
      },
      include: {
        members: { select: { memeber: true } },
        rows: { include: { cards: true } },
      },
    });
    return board;
  });
