// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import board from "./board/boardRouter";
export const appRouter = router({
  auth: authRouter,
  board,
});

// export type definition of API
export type AppRouter = typeof appRouter;
