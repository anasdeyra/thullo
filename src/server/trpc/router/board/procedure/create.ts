import { z } from "zod";
import { protectedProcedure } from "../../../trpc";

export const create = protectedProcedure
  .input(
    z.object({
      coverPhoto: z.string().url(),
      title: z.string().min(5),
      isPrivate: z.boolean().optional(),
      description: z.string().optional(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    await ctx.prisma.board.create({
      data: { ...input, adminId: ctx.session.user.id },
    });
  });
