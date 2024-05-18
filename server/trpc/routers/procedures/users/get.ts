import { z } from 'zod';
import prismaClient from '~/server/prismaClient';
import { publicProcedure } from '~/server/trpc/trpc';

export const get = publicProcedure
  .input(
    z.object({
      select: z.string().nullish(),
    })
  )
  .query(async ({ input }) => {
    const users = await prismaClient.user.findMany()

    return { users }
  })