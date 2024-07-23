import { Context } from "./context"

export const resolvers = {
  Query: {
    tasks: (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.task.findMany()
    },
  },
}
