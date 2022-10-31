import { protectedProcedure } from "../../../trpc";

export const getMyBoards = protectedProcedure.query(async ({ ctx }) => {
  const boards = await ctx.prisma.board.findMany({
    where: {
      OR: [
        { adminId: ctx.session.user.id },
        { members: { some: { memberId: ctx.session.user.id } } },
      ],
    },
    select: {
      id: true,
      coverPhoto: true,
      title: true,
      members: { select: { memeber: { select: { image: true } } } },
    },
  });
  return boards;
});
